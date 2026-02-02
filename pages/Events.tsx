
import React, { useState, useMemo } from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';
import { EventItem } from '../types';

const EventsPage: React.FC = () => {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const [selectedMonth, setSelectedMonth] = useState("JAN");

  const allEvents: EventItem[] = useMemo(() => [
    // JAN
    { date: '03', month: 'JAN', day: 'Sat', title: 'Monthly Mug', description: 'The first prestigious cup of the new year.', category: 'GOLF', color: 'mccGold' },
    { date: '07', month: 'JAN', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Mid-week tournament sponsored by East Toyota.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '31', month: 'JAN', day: 'Sat', title: 'Ryder Cup', description: 'The ultimate team challenge at MCC.', category: 'MAJOR', color: 'mccDark' },
    // FEB
    { date: '04', month: 'FEB', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Mid-week tournament sponsored by East Toyota.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '07', month: 'FEB', day: 'Sat', title: 'Monthly Mug', description: 'Standard club competition.', category: 'GOLF', color: 'mccGreen' },
    { date: '14', month: 'FEB', day: 'Sat', title: 'Valentines Day Dinner', description: 'Live music and a special menu for couples on the deck.', category: 'SOCIAL', color: 'mccGold' },
    // MAR
    { date: '04', month: 'MAR', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '07', month: 'MAR', day: 'Sat', title: 'Monthly Mug', description: 'Monthly ranking tournament.', category: 'GOLF', color: 'mccGreen' },
    { date: '28', month: 'MAR', day: 'Sat', title: 'Sugar Tots Golf Day', description: 'A fun community golf day for a good cause.', category: 'COMMUNITY', color: 'mccSand' },
    // APR
    { date: '01', month: 'APR', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '03-06', month: 'APR', day: 'Fri-Mon', title: 'Easter Weekend', description: 'Family activities and special lunches throughout the weekend.', category: 'SOCIAL', color: 'mccGold' },
    // MAY
    { date: '02', month: 'MAY', day: 'Sat', title: 'NG Kerk Golf Day', description: 'Community fundraiser golf event.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '13', month: 'MAY', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '16', month: 'MAY', day: 'Sat', title: 'MPS Golf Day', description: 'Mtunzini Primary School fundraiser.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '17', month: 'MAY', day: 'Sun', title: 'RITS Tournament', description: 'Special invitational tournament.', category: 'GOLF', color: 'mccGreen' },
    // JUN
    { date: '10', month: 'JUN', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '13', month: 'JUN', day: 'Sat', title: 'St Catherines Golf Day', description: 'Annual fundraiser day.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '20', month: 'JUN', day: 'Sat', title: 'Monthly Mug', description: 'Pre-Championships warmup.', category: 'GOLF', color: 'mccGreen' },
    { date: '26', month: 'JUN', day: 'Fri', title: 'Night Golf', description: 'Glow-in-the-dark golf followed by late-night braai.', category: 'SOCIAL', color: 'mccDark' },
    { date: '27-28', month: 'JUN', day: 'Sat-Sun', title: 'Club Championships', description: 'The pinnacle of the MCC golfing year. Two days of stroke play.', category: 'MAJOR', color: 'mccGold' },
    // JUL
    { date: '01', month: 'JUL', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '04', month: 'JUL', day: 'Sat', title: 'Monthly Mug', description: 'Post-championship cup.', category: 'GOLF', color: 'mccGreen' },
    { date: '11', month: 'JUL', day: 'Sat', title: 'Carike 40th Invitational', description: 'Private function & golf.', category: 'PRIVATE', color: 'mccSand' },
    { date: '12', month: 'JUL', day: 'Sun', title: 'SAGES', description: 'Senior golf association gathering.', category: 'GOLF', color: 'mccGreen' },
    { date: '19', month: 'JUL', day: 'Sun', title: 'LIV Golf 8AM', description: 'Morning shotgun start.', category: 'GOLF', color: 'mccGreen' },
    { date: '25', month: 'JUL', day: 'Sat', title: 'Toti Golf Tour Louis', description: 'Visiting tour from Amanzimtoti.', category: 'TOUR', color: 'mccDark' },
    { date: '29', month: 'JUL', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    // AUG
    { date: '01', month: 'AUG', day: 'Sat', title: 'Monthly Mug', description: 'August ranking tournament.', category: 'GOLF', color: 'mccGreen' },
    { date: '05', month: 'AUG', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '08', month: 'AUG', day: 'Sat', title: 'MPPS Golf Challenge', description: 'Annual challenge event.', category: 'GOLF', color: 'mccGreen' },
    { date: '22', month: 'AUG', day: 'Sat', title: 'LEAF Golf Day', description: 'Environmental awareness fundraiser.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '28', month: 'AUG', day: 'Fri', title: 'PMB College Old Boys', description: 'Invitational event for old boys.', category: 'SOCIAL', color: 'mccDark' },
    { date: '29', month: 'AUG', day: 'Sat', title: 'Pentathlon', description: 'Multisport club challenge.', category: 'MAJOR', color: 'mccGold' },
    // SEP
    { date: '02', month: 'SEP', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '05', month: 'SEP', day: 'Sat', title: 'Tennis Golf Day', description: 'Joint event for golfers and tennis players.', category: 'GOLF', color: 'mccGreen' },
    { date: '12', month: 'SEP', day: 'Sat', title: 'Lavender Lane Golf Day', description: 'Community fundraiser.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '17', month: 'SEP', day: 'Thu', title: 'Nicolien Golf Day', description: 'Invitational tournament.', category: 'PRIVATE', color: 'mccSand' },
    { date: '19', month: 'SEP', day: 'Sat', title: 'Tapanga Cup', description: 'Regional invitational challenge.', category: 'MAJOR', color: 'mccDark' },
    { date: '26', month: 'SEP', day: 'Sat', title: 'Monthly Mug', description: 'September ranking tournament.', category: 'GOLF', color: 'mccGreen' },
    // OCT
    { date: '03', month: 'OCT', day: 'Sat', title: 'MPPS Challenge', description: 'Invitational school fundraiser.', category: 'COMMUNITY', color: 'mccSand' },
    { date: '07', month: 'OCT', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '10', month: 'OCT', day: 'Sat', title: 'Monthly Mug / CPF Day', description: 'Ranking cup & Community Policing fundraiser.', category: 'MAJOR', color: 'mccGold' },
    { date: '17', month: 'OCT', day: 'Sat', title: 'Mondi Golf Day', description: 'Corporate tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '24', month: 'OCT', day: 'Sat', title: 'BEERFEST', description: 'Zululand\'s biggest party. Live music, local brews, and festival food.', category: 'SOCIAL', color: 'mccGold' },
    // NOV
    { date: '31/01', month: 'NOV', day: 'Sat/Sun', title: 'Monthly Mug', description: 'End-of-season ranking.', category: 'GOLF', color: 'mccGreen' },
    { date: '04', month: 'NOV', day: 'Wed', title: 'East Toyota Sponsor Day', description: 'Sponsor tournament.', category: 'SPONSOR', color: 'mccGreen' },
    { date: '21', month: 'NOV', day: 'Sat', title: 'Ladies Golf Day', description: 'Celebrating the women of MCC.', category: 'GOLF', color: 'mccGold' },
    { date: '28', month: 'NOV', day: 'Sat', title: 'Squash Golf Day', description: 'A fun cross-sport event.', category: 'SOCIAL', color: 'mccSand' },
    // DEC
    { date: '05', month: 'DEC', day: 'Sat', title: 'Greenkeepers Challenge', description: 'The wildest golf day of the year. Secret hazards everywhere!', category: 'MAJOR', color: 'mccDark' },
    { date: '12', month: 'DEC', day: 'Sat', title: 'Boere vs Souties', description: 'The traditional local rivalry clash.', category: 'MAJOR', color: 'mccGold' },
    { date: '15', month: 'DEC', day: 'Tue', title: 'Klip In Die Bos', description: 'Year-end social tournament.', category: 'SOCIAL', color: 'mccSand' },
    { date: '19', month: 'DEC', day: 'Sat', title: 'Christmas Cheer', description: 'The final club event of the year. Gifts, golf, and family dinner.', category: 'MAJOR', color: 'mccGold' },
  ], []);

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
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                selectedMonth === m 
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
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:row-span-1 md:flex-row hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-in slide-in-from-bottom-2">
                <div className={`p-8 md:w-48 flex flex-col justify-center items-center text-center ${
                  event.color === 'mccGreen' ? 'bg-mccGreen text-white' : 
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
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      event.color === 'mccSand' ? 'border-mccGreen text-mccGreen' : 'border-mccGold text-mccGold'
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
