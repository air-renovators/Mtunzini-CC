
import React, { useState } from 'react';
import Icon from '../components/Icon';
import TennisPlayoffTracker from '../components/TennisPlayoffTracker';
import { Icons } from '../constants';
import { LeaderboardEntry, TennisPlayoff } from '../types';

const LeaderboardsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'golf' | 'tennis' | 'cycle'>('golf');
  const [showLogModal, setShowLogModal] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<'golf' | 'tennis' | 'cycle'>('golf');

  // Tennis Score State
  const [tennisForm, setTennisForm] = useState({
    player1: '',
    player2: '',
    s1p1: '', s1p2: '',
    s2p1: '', s2p2: '',
    s3p1: '', s3p2: '',
  });

  const monthlyMugData: LeaderboardEntry[] = [
    { rank: 1, name: "Hendrik Potgieter", score: 284, trend: 'stable' },
    { rank: 2, name: "Andre van Wyk", score: 279, trend: 'up' },
    { rank: 3, name: "David Mthembu", score: 275, trend: 'down' },
    { rank: 4, name: "Sarah Peters", score: 268, trend: 'up' },
    { rank: 5, name: "Johan Smits", score: 262, trend: 'stable' },
    { rank: 6, name: "Garth Robinson", score: 259, trend: 'down' },
  ];

  const cycleChallengeData: LeaderboardEntry[] = [
    { rank: 1, name: "Lize-Mari Botha", score: "42m 12s", trend: 'up' },
    { rank: 2, name: "Pieter Naude", score: "43m 45s", trend: 'stable' },
    { rank: 3, name: "Chris Evans", score: "45m 10s", trend: 'down' },
    { rank: 4, name: "Thabo Molefe", score: "46m 32s", trend: 'up' },
  ];

  const tennisPlayoffs: TennisPlayoff[] = [
    { playerA: "James Bond", playerB: "Roger Moore", score: "6-4, 6-2", status: 'completed', date: '2026-05-12' },
    { playerA: "Busi Zulu", playerB: "Emma Watson", score: "Upcoming", status: 'upcoming', date: '2026-06-15' },
    { playerA: "Luke Skywalker", playerB: "Darth Vader", score: "7-5, 4-6, 6-3", status: 'completed', date: '2026-05-10' },
    { playerA: "Andre van Wyk", playerB: "David Mthembu", score: "Wait List", status: 'upcoming', date: '2026-06-20' },
    { playerA: "Sarah Peters", playerB: "Johan Smits", score: "6-0, 6-1", status: 'completed', date: '2026-05-08' },
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-mccSand/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="text-left">
            <div className="inline-block px-4 py-1 border border-mccGold/30 rounded-full mb-6">
              <span className="text-mccGold uppercase tracking-[0.3em] text-[10px] font-bold">Hall of Fame</span>
            </div>
            <h2 className="text-5xl md:text-7xl text-mccGreen leading-tight font-serif">Sporting <span className="italic text-mccGold font-normal">Rankings</span></h2>
            <p className="text-gray-500 max-w-xl text-lg font-light mt-4">Tracking the season's top performers across the Monthly Mug, Tennis brackets, and Cycle challenges.</p>
          </div>
          
          <button 
            onClick={() => {
              setSelectedDiscipline(activeTab);
              setShowLogModal(true);
            }}
            className="flex items-center gap-3 bg-mccGreen text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-mccGold transition-all shadow-xl hover:-translate-y-1"
          >
            <Icon path={Icons.Plus} className="w-4 h-4" />
            Submit Match Score
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
          {[
            { id: 'golf', name: 'The Monthly Mug', icon: Icons.Trophy },
            { id: 'tennis', name: 'Tennis Play-offs', icon: Icons.Target },
            { id: 'cycle', name: 'Cycle Challenge', icon: Icons.Bike },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-mccGreen text-white shadow-xl scale-105' 
                : 'bg-white text-gray-400 hover:text-mccGreen hover:shadow-md'
              }`}
            >
              <Icon path={tab.icon} className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="space-y-12">
          {activeTab === 'golf' && (
            <div className="max-w-4xl mx-auto grid gap-8">
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-mccGreen p-8 text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-serif">Year-to-Date Leaderboard</h3>
                    <p className="text-mccGold text-[10px] uppercase tracking-widest font-bold mt-1">Monthly Mug Points Standings</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon path={Icons.Trophy} className="w-6 h-6 text-mccGold" />
                  </div>
                </div>
                <div className="p-4 sm:p-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-4 px-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Rank</th>
                        <th className="text-left py-4 px-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Member Name</th>
                        <th className="text-right py-4 px-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Total Pts</th>
                        <th className="text-center py-4 px-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {monthlyMugData.map((entry) => (
                        <tr key={entry.rank} className="hover:bg-gray-50 transition-colors">
                          <td className="py-5 px-4">
                            <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${
                              entry.rank === 1 ? 'bg-mccGold text-white shadow-lg' : 
                              entry.rank === 2 ? 'bg-gray-200 text-gray-600' :
                              entry.rank === 3 ? 'bg-orange-100 text-orange-600' : 'text-gray-400'
                            }`}>
                              {entry.rank}
                            </span>
                          </td>
                          <td className="py-5 px-4 font-bold text-mccGreen">{entry.name}</td>
                          <td className="py-5 px-4 text-right font-serif text-lg text-mccGreen">{entry.score}</td>
                          <td className="py-5 px-4 flex justify-center">
                            {entry.trend === 'up' && <div className="text-green-500">▲</div>}
                            {entry.trend === 'down' && <div className="text-red-400">▼</div>}
                            {entry.trend === 'stable' && <div className="text-gray-300">—</div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tennis' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
                <div className="mb-12">
                  <h3 className="text-4xl font-serif text-mccGreen mb-2">Tennis Play-off Tracker</h3>
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">Tournament Ladder & Active Fixtures</p>
                </div>
                <TennisPlayoffTracker matches={tennisPlayoffs} />
              </div>
            </div>
          )}

          {activeTab === 'cycle' && (
            <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-mccDark p-10 rounded-[3rem] shadow-2xl text-white">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-3xl font-serif">Cycling Time Trials</h3>
                    <p className="text-mccGold text-[10px] uppercase tracking-widest font-bold mt-1">15km Coastal Loop Records</p>
                  </div>
                  <Icon path={Icons.Bike} className="w-10 h-10 text-mccGold opacity-50" />
                </div>
                <div className="space-y-4">
                  {cycleChallengeData.map((rider, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl group hover:bg-white/10 transition-all border border-white/10">
                      <div className="flex items-center gap-6">
                        <div className="text-2xl font-serif text-mccGold font-bold w-6">{rider.rank}</div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{rider.name}</h4>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Zululand Racing Club</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-serif text-mccGold font-bold">{rider.score}</div>
                        <div className={`text-[10px] font-bold uppercase mt-1 ${rider.trend === 'up' ? 'text-green-400' : 'text-gray-500'}`}>
                          {rider.trend === 'up' ? 'PB Improved' : 'Stable'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Unified Sidebar Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon path={Icons.Activity} className="w-5 h-5 text-mccGold" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-mccGreen">Live Feed</h4>
              </div>
              <div className="space-y-6">
                {[
                  { time: '2h ago', sport: 'Golf', note: 'Andre van Wyk logged a 72 Net.' },
                  { time: '5h ago', sport: 'Tennis', note: 'Skywalker defeated Vader in 3 sets.' },
                  { time: 'Yesterday', sport: 'Cycle', note: 'New course record by Lize-Mari.' }
                ].map((act, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1 h-auto bg-gray-100 rounded-full group-hover:bg-mccGold transition-colors"></div>
                    <div>
                      <p className="text-[11px] font-bold text-mccGold uppercase mb-1">{act.time} • {act.sport}</p>
                      <p className="text-sm text-gray-600 leading-snug">{act.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-mccSand p-8 rounded-[2rem] border border-mccGold/10 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-serif text-mccGreen mb-4">Historical Cup</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">The Monthly Mug has been a Mtunzini tradition since 1968. Current holder: <b>Hendrik Potgieter</b>.</p>
            </div>
            <button className="text-mccGold text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              Tournament History <Icon path={Icons.ArrowRight} className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-mccGreen p-8 rounded-[2rem] text-white flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-serif mb-4">Challenge Rules</h4>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">All scores must be verified by a pro-shop official or an active club member to be counted.</p>
            </div>
            <button className="text-mccGold text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              View Bylaws <Icon path={Icons.ArrowRight} className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Log Score Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-mccDark/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-mccGreen p-8 text-white flex justify-between items-center">
              <h3 className="text-xl font-serif">Record a Result</h3>
              <button onClick={() => setShowLogModal(false)}><Icon path={Icons.X} className="w-6 h-6" /></button>
            </div>
            <div className="p-10 space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Sporting Discipline</label>
                <div className="flex gap-2">
                  {(['golf', 'tennis', 'cycle'] as const).map(d => (
                    <button 
                      key={d}
                      onClick={() => setSelectedDiscipline(d)}
                      className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                        selectedDiscipline === d ? 'bg-mccGold text-white shadow-lg' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDiscipline === 'tennis' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Player 1 (Home)</label>
                      <input 
                        type="text" 
                        value={tennisForm.player1}
                        onChange={(e) => setTennisForm({...tennisForm, player1: e.target.value})}
                        className="w-full bg-gray-50 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-mccGold text-sm" 
                        placeholder="Player A Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Player 2 (Away)</label>
                      <input 
                        type="text" 
                        value={tennisForm.player2}
                        onChange={(e) => setTennisForm({...tennisForm, player2: e.target.value})}
                        className="w-full bg-gray-50 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-mccGold text-sm" 
                        placeholder="Player B Name" 
                      />
                    </div>
                  </div>

                  <div className="bg-mccSand/40 p-6 rounded-2xl border border-mccGold/10">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mccGreen mb-6 border-b border-mccGold/20 pb-2">Match Score Card</h4>
                    
                    {/* Sets Table */}
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div className="text-[10px] font-bold text-gray-400">PLAYERS</div>
                      <div className="text-center text-[10px] font-bold text-mccGold">SET 1</div>
                      <div className="text-center text-[10px] font-bold text-mccGold">SET 2</div>
                      <div className="text-center text-[10px] font-bold text-mccGold">SET 3 / TB</div>
                      
                      {/* Row 1 */}
                      <div className="text-xs font-bold truncate text-mccGreen">{tennisForm.player1 || 'Player 1'}</div>
                      <input 
                        type="number" min="0" max="7" 
                        value={tennisForm.s1p1}
                        onChange={(e) => setTennisForm({...tennisForm, s1p1: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />
                      <input 
                        type="number" min="0" max="7" 
                        value={tennisForm.s2p1}
                        onChange={(e) => setTennisForm({...tennisForm, s2p1: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />
                      <input 
                        type="number" min="0" max="15" 
                        value={tennisForm.s3p1}
                        onChange={(e) => setTennisForm({...tennisForm, s3p1: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />

                      {/* Row 2 */}
                      <div className="text-xs font-bold truncate text-mccGreen">{tennisForm.player2 || 'Player 2'}</div>
                      <input 
                        type="number" min="0" max="7" 
                        value={tennisForm.s1p2}
                        onChange={(e) => setTennisForm({...tennisForm, s1p2: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />
                      <input 
                        type="number" min="0" max="7" 
                        value={tennisForm.s2p2}
                        onChange={(e) => setTennisForm({...tennisForm, s2p2: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />
                      <input 
                        type="number" min="0" max="15" 
                        value={tennisForm.s3p2}
                        onChange={(e) => setTennisForm({...tennisForm, s3p2: e.target.value})}
                        className="bg-white p-3 rounded-lg border border-gray-100 text-center text-sm focus:ring-2 focus:ring-mccGold" 
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Member Name</label>
                      <input type="text" className="w-full bg-gray-50 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-mccGold text-sm" placeholder="Search member..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Score / Time</label>
                      <input type="text" className="w-full bg-gray-50 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-mccGold text-sm" placeholder={selectedDiscipline === 'golf' ? 'e.g. 71' : 'e.g. 44m 30s'} />
                    </div>
                  </div>
                </div>
              )}

              <p className="text-[10px] text-gray-400 italic">Results will be pending until verified by the Pro Shop or an active committee member.</p>
              
              <button 
                onClick={() => {
                  alert("Score submitted for verification. Thank you!");
                  setShowLogModal(false);
                }}
                className="w-full bg-mccGreen text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-lg hover:bg-mccGold transition-colors"
              >
                Post Result to Club Feed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardsPage;
