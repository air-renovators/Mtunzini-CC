import React from 'react';
import Icon from './Icon';
import { Icons } from '../constants';
import { TennisPlayoff } from '../types';

interface TennisPlayoffTrackerProps {
  matches: TennisPlayoff[];
}

const TennisPlayoffTracker: React.FC<TennisPlayoffTrackerProps> = ({ matches }) => {
  const completed = matches.filter(m => m.status === 'completed');
  const upcoming = matches.filter(m => m.status === 'upcoming');

  const getRelativeTime = (dateStr?: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    
    const diffTime = compareDate.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays > 1 && diffDays < 7) return `In ${diffDays} days`;
    if (diffDays < -1 && diffDays > -7) return `${Math.abs(diffDays)} days ago`;
    return null;
  };

  const setReminder = (match: TennisPlayoff) => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
      return;
    }

    const triggerReminder = () => {
      new Notification("MCC Tennis Reminder", {
        body: `Match reminder: ${match.playerA} vs ${match.playerB} on ${match.date || 'TBC'}`,
        icon: 'https://cdn-icons-png.flaticon.com/512/824/824056.png'
      });
      alert("Success! We've set a browser reminder for your match.");
    };

    if (Notification.permission === "granted") {
      triggerReminder();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          triggerReminder();
        }
      });
    } else {
      alert("Notification permission was denied. Please enable it in your browser settings.");
    }
  };

  const addToCalendar = (match: TennisPlayoff) => {
    const title = `Tennis Playoff: ${match.playerA} vs ${match.playerB}`;
    const details = `Match scheduled at Mtunzini Country Club Tennis Courts.`;
    const location = `1 Hely Hutchinson St, Mtunzini, 3867`;
    const dateStr = match.date ? match.date.replace(/-/g, '') : '20261225';
    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${dateStr}T100000Z/${dateStr}T110000Z`;
    window.open(googleUrl, '_blank');
  };

  const MatchCard: React.FC<{ match: TennisPlayoff }> = ({ match }) => {
    const relativeTime = getRelativeTime(match.date);

    return (
      <div className={`group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        match.status === 'completed' 
          ? 'bg-mccDark border-white/10 shadow-lg' 
          : 'bg-white border-gray-100 hover:shadow-2xl hover:-translate-y-1'
      }`}>
        {/* Decorative Background for Completed */}
        {match.status === 'completed' && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        )}

        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[8px] font-bold uppercase tracking-[0.3em] px-2 py-1 rounded-md inline-block ${
                match.status === 'completed' ? 'bg-mccGreen text-white' : 'bg-mccGold text-white animate-pulse'
              }`}>
                {match.status}
              </span>
              {relativeTime && (
                <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-md border ${
                  match.status === 'completed' ? 'border-white/20 text-gray-400' : 'border-mccGreen/20 text-mccGreen'
                }`}>
                  {relativeTime}
                </span>
              )}
            </div>
            {match.date && (
              <span className={`text-[10px] font-bold uppercase tracking-widest ${match.status === 'completed' ? 'text-gray-500' : 'text-mccGreen'}`}>
                {new Date(match.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            )}
          </div>
          <div className={`font-serif text-2xl font-bold ${match.status === 'completed' ? 'text-mccGold' : 'text-mccGreen'}`}>
            {match.score === 'Upcoming' ? 'vs' : match.score}
          </div>
        </div>
        
        <div className="flex items-center gap-6 mb-8 relative z-10">
          <div className="flex-1 text-center">
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 ${
              match.status === 'completed' ? 'bg-white/10 text-white' : 'bg-mccSand text-mccGreen shadow-sm'
            }`}>
              {match.playerA.charAt(0)}
            </div>
            <p className={`font-bold text-sm leading-tight ${match.status === 'completed' ? 'text-gray-300' : 'text-mccGreen'}`}>{match.playerA}</p>
          </div>
          
          <div className="flex flex-col items-center opacity-30">
            <div className={`h-10 w-[1px] ${match.status === 'completed' ? 'bg-white/30' : 'bg-gray-300'}`}></div>
            <span className="text-[10px] font-serif italic font-bold my-1 text-mccGold">v</span>
            <div className={`h-10 w-[1px] ${match.status === 'completed' ? 'bg-white/30' : 'bg-gray-300'}`}></div>
          </div>
          
          <div className="flex-1 text-center">
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 ${
              match.status === 'completed' ? 'bg-white/10 text-white' : 'bg-mccSand text-mccGreen shadow-sm'
            }`}>
              {match.playerB.charAt(0)}
            </div>
            <p className={`font-bold text-sm leading-tight ${match.status === 'completed' ? 'text-gray-300' : 'text-mccGreen'}`}>{match.playerB}</p>
          </div>
        </div>

        {match.status === 'upcoming' && (
          <div className="grid grid-cols-2 gap-3 relative z-10">
            <button 
              onClick={() => setReminder(match)}
              className="flex items-center justify-center gap-2 py-3 bg-mccGreen text-white text-[9px] font-bold uppercase tracking-widest rounded-xl hover:bg-mccGold transition-all shadow-md"
            >
              <Icon path={Icons.Bot} className="w-3 h-3" />
              Set Reminder
            </button>
            <button 
              onClick={() => addToCalendar(match)}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-mccGold text-mccGold text-[9px] font-bold uppercase tracking-widest rounded-xl hover:bg-mccGold hover:text-white transition-all shadow-sm"
            >
              <Icon path={Icons.Calendar} className="w-3 h-3" />
              Calendar
            </button>
          </div>
        )}

        {match.status === 'completed' && (
          <div className="text-center relative z-10">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Verified Match Result</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Recent Results */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
          <div className="w-10 h-10 bg-mccDark rounded-xl flex items-center justify-center text-mccGold">
            <Icon path={Icons.Trophy} className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-2xl text-mccGreen">Historical Results</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Match Archives</p>
          </div>
        </div>
        <div className="grid gap-8">
          {completed.length > 0 ? (
            completed.map((m, i) => <MatchCard key={i} match={m} />)
          ) : (
            <div className="py-12 px-8 bg-mccSand/40 border border-dashed border-gray-200 rounded-[2rem] text-center">
              <p className="text-gray-400 italic text-sm">No historical results found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Fixtures */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
          <div className="w-10 h-10 bg-mccGold rounded-xl flex items-center justify-center text-white">
            <Icon path={Icons.Calendar} className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-2xl text-mccGreen">Upcoming Fixtures</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scheduled Matches</p>
          </div>
        </div>
        <div className="grid gap-8">
          {upcoming.length > 0 ? (
            upcoming.map((m, i) => <MatchCard key={i} match={m} />)
          ) : (
            <div className="py-12 px-8 bg-mccSand/40 border border-dashed border-gray-200 rounded-[2rem] text-center">
              <p className="text-gray-400 italic text-sm">No matches currently scheduled.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TennisPlayoffTracker;