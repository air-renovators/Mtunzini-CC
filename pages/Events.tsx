
import React, { useState, useMemo, useEffect } from 'react';
import Papa from 'papaparse';
import Icon from '../components/Icon';
import { Icons } from '../constants';
import { EventItem } from '../types';

const EventsPage: React.FC = () => {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const [selectedMonth, setSelectedMonth] = useState("JAN");

  const [allEvents, setAllEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.csv', { cache: 'no-cache' });
        if (!response.ok) throw new Error('Failed to fetch calendar');

        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedEvents = results.data.map((row: any) => ({
              date: row['Date'] || '',
              month: (row['Month'] || '').substring(0, 3).toUpperCase(),
              day: row['Day'] || '',
              title: row['Event Name'] || 'Untitled Event',
              description: row['Description'] || '',
              category: (row['Category'] || 'SOCIAL').toUpperCase(),
              color: mapCategoryToColor(row['Category'])
            })).filter((e: EventItem) => e.month && e.date); // Filter out empty rows

            setAllEvents(parsedEvents);
            setLoading(false);
          },
          error: (err: Error) => {
            console.error("CSV Parse Error:", err);
            setError("Failed to parse calendar data");
            setLoading(false);
          }
        });
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Could not load events");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Parser for the Visual Calendar Grid (Cells with numbers followed by cells with text)
  const parseVisualCalendar = (csvText: string): EventItem[] => {
    const events: EventItem[] = [];
    const rows = Papa.parse(csvText, { header: false, skipEmptyLines: false }).data as string[][];

    let currentMonth = "JAN"; // Default

    // Attempt to find month name in first few rows
    for (let i = 0; i < 5; i++) {
      if (rows[i]) {
        const joined = rows[i].join(' ').toUpperCase();
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const found = months.find(m => joined.includes(m));
        if (found) currentMonth = found;
      }
    }

    // Iterate rows to find date/event pairs
    for (let i = 0; i < rows.length - 1; i++) {
      const row = rows[i];
      const nextRow = rows[i + 1];

      row.forEach((cell, colIndex) => {
        const cellNum = parseInt(cell);
        if (!isNaN(cellNum) && cellNum >= 1 && cellNum <= 31) {
          // Potentially a date. Check next row for event.
          if (nextRow && nextRow[colIndex] && nextRow[colIndex].trim() !== '') {
            const eventTitle = nextRow[colIndex].trim();

            // Simple Category Logic
            let category = 'GOLF';
            if (eventTitle.includes('SPONSOR')) category = 'SPONSOR';
            if (eventTitle.includes('MUG')) category = 'GOLF';
            if (eventTitle.includes('CHAMPIONSHIP')) category = 'MAJOR';
            if (eventTitle.includes('WEDDING') || eventTitle.includes('DINNER')) category = 'SOCIAL';

            events.push({
              date: cellNum.toString().padStart(2, '0'),
              month: currentMonth,
              day: getDayName(currentMonth, cellNum),
              title: eventTitle,
              description: 'Event synced from Google Sheets',
              category: category,
              color: mapCategoryToColor(category)
            });
          }
        }
      });
    }
    return events;
  };

  const getDayName = (month: string, date: number) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthIndex = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].indexOf(month);
    if (monthIndex === -1) return 'Sat';

    // 2026 Calendar logic
    const d = new Date(2026, monthIndex, date);
    return days[d.getDay()];
  };

  const mapCategoryToColor = (category: string) => {
    const cat = (category || '').toUpperCase();
    if (['GOLF', 'COMPETITION', 'TOURNAMENT'].some(c => cat.includes(c))) return 'mccGreen';
    if (['SOCIAL', 'DINNER', 'PARTY', 'FUN'].some(c => cat.includes(c))) return 'mccGold';
    if (['MAJOR', 'CHAMPIONSHIP', 'CUP'].some(c => cat.includes(c))) return 'mccDark';
    return 'mccSand';
  };

  const filteredEvents = useMemo(() => {
    return allEvents.filter(e => e.month === selectedMonth);
  }, [allEvents, selectedMonth]);

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-mccSand/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-mccGold/30 rounded-full mb-6">
            <span className="text-mccGold uppercase tracking-[0.4em] text-[10px] font-bold">2026 Calendar</span>
          </div>
          <h2 className="text-5xl md:text-7xl text-mccGreen leading-tight font-serif">What's <span className="italic text-mccGold font-normal">Happening</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light mt-4">Plan your season at Mtunzini Country Club.</p>
        </div>

        {/* Month Filter */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 py-4 justify-start md:justify-center border-b border-gray-200">
          {months.map(m => (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${selectedMonth === m
                ? 'bg-mccGreen text-white shadow-lg scale-105'
                : 'text-gray-400 hover:text-mccGreen'
                }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center text-center py-20 opacity-60">
              <div className="w-12 h-12 border-4 border-mccGold border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-mccGreen">Loading Calendar...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center text-center py-20 opacity-60 text-red-500">
              <Icon path={Icons.X} className="w-16 h-16 mb-4" />
              <p>{error}</p>
            </div>
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:row-span-1 md:flex-row hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-in slide-in-from-bottom-2">
                <div className={`p-8 md:w-48 flex flex-col justify-center items-center text-center ${event.color === 'mccGreen' ? 'bg-mccGreen text-white' :
                  event.color === 'mccGold' ? 'bg-mccGold text-white' :
                    event.color === 'mccDark' ? 'bg-mccDark text-white' : 'bg-mccSand text-mccGreen'
                  }`}>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">{event.month}</span>
                  <span className="text-4xl font-serif font-bold mb-1 leading-none">{event.date}</span>
                  <div className={`w-8 h-[1px] my-3 ${event.color === 'mccSand' ? 'bg-mccGreen/20' : 'bg-white/30'}`}></div>
                  <span className="text-[9px] uppercase tracking-widest font-bold opacity-80">{event.day}</span>
                </div>
                <div className="p-10 flex-grow space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${event.color === 'mccSand' ? 'border-mccGreen text-mccGreen' : 'border-mccGold text-mccGold'
                      }`}>
                      {event.category}
                    </span>
                    <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><Icon path={Icons.Calendar} className="w-4 h-4 text-gray-400" /></button>
                  </div>
                  <h3 className="text-2xl font-bold text-mccGreen group-hover:text-mccGold transition-colors">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{event.description}</p>
                  <div className="pt-4 flex gap-4">
                    <button className="bg-mccSand text-mccGreen px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-mccGreen hover:text-white transition-all shadow-sm">
                      RSVP / Book
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 opacity-40">
              <Icon path={Icons.Calendar} className="w-16 h-16 mb-4" />
              <p className="text-xl font-serif">No club events listed for {selectedMonth} yet.</p>
              <p className="text-sm">Check back later or contact the manager.</p>
            </div>
          )}
        </div>

        {/* Fixed Promo Section */}
        <div className="mt-24 p-12 bg-mccGreen rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mccGold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="max-w-lg text-center md:text-left relative z-10">
            <h4 className="text-3xl font-serif mb-4">Host Your Legacy</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              From weddings on the lagoon to corporate golf days. Our 2026 booking calendar is now open for private functions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">
                <Icon path={Icons.Check} className="w-3 h-3 text-mccGold" />
                Full Catering
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">
                <Icon path={Icons.Check} className="w-3 h-3 text-mccGold" />
                lagoon View
              </div>
            </div>
          </div>
          <button className="bg-mccGold text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-mccGreen transition-all shadow-2xl relative z-10">
            Inquire About Venue Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
