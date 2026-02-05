
import React, { useState, useEffect } from 'react';
import { PageId, NavLink } from './types';
import { Icons, MCC_NAV_LINKS } from './constants';
import Icon from './components/Icon';
import ClubAssistant from './components/ClubAssistant';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FacilitiesPage from './pages/Facilities';
import MembershipPage from './pages/Membership';
import EventsPage from './pages/Events';
import ContactPage from './pages/Contact';
import LeaderboardsPage from './pages/Leaderboards';
import CoursePage from './pages/Course';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const togglePage = (id: PageId) => {
    setActivePage(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || activePage !== 'home' ? 'bg-white shadow-lg py-3 text-mccGreen' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer flex items-center gap-4 group"
              onClick={() => togglePage('home')}
            >
              <div className={`w-12 h-12 border-2 flex items-center justify-center font-serif font-bold text-2xl rounded-sm transition-all duration-300 ${isScrolled || activePage !== 'home' ? 'border-mccGreen text-mccGreen' : 'border-white text-white group-hover:bg-white group-hover:text-mccGreen'}`}>
                M
              </div>
              <div className="hidden sm:block">
                <div className={`font-serif font-bold text-xl leading-none tracking-tight transition-colors ${isScrolled || activePage !== 'home' ? 'text-mccGreen' : 'text-white'}`}>Mtunzini</div>
                <div className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-1 transition-colors ${isScrolled || activePage !== 'home' ? 'text-mccGold' : 'text-gray-300'}`}>Country Club</div>
              </div>
            </div>

            {/* Desktop Menu - Adjusted spacing to fit 7 items */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {MCC_NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => togglePage(link.id)}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-mccGold relative group whitespace-nowrap ${activePage === link.id ? 'text-mccGold' : ''
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-mccGold transition-all duration-300 group-hover:w-full ${activePage === link.id ? 'w-full' : ''}`}></span>
                </button>
              ))}
              <button
                onClick={() => togglePage('membership')}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${isScrolled || activePage !== 'home'
                  ? 'border-mccGreen text-mccGreen hover:bg-mccGreen hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-mccGreen'
                  }`}
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 transition-transform hover:scale-110 active:scale-95">
                {isMenuOpen ? <Icon path={Icons.X} /> : <Icon path={Icons.Menu} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-mccDark/95 z-[60] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <Icon path={Icons.X} className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-8">
              {MCC_NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => togglePage(link.id)}
                  className="text-2xl font-serif text-white hover:text-mccGold transition-colors tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-8 w-full">
                <button
                  onClick={() => togglePage('membership')}
                  className="w-full bg-mccGold text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm"
                >
                  Membership Inquiry
                </button>
              </div>
            </div>
            <div className="p-8 text-center text-gray-500 text-xs tracking-widest uppercase">
              The Heart of Mtunzini
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
          {activePage === 'home' && <HomePage setPage={togglePage} />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'membership' && <MembershipPage />}
          {activePage === 'events' && <EventsPage />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'facilities' && <FacilitiesPage />}
          {activePage === 'leaderboards' && <LeaderboardsPage />}
          {activePage === 'course' && <CoursePage />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-mccGreen text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-mccGold flex items-center justify-center text-mccGold text-xl">M</div>
              MCC
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Relaxed quality in the heart of Zululand. Where the fairways meet the lagoon and community thrives.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/MtunziniCountryClub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-mccGold hover:border-mccGold transition-all">
                <Icon path={Icons.Facebook} className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mcclub2024/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-mccGold hover:border-mccGold transition-all">
                <Icon path={Icons.Instagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {MCC_NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button onClick={() => togglePage(link.id)} className="hover:text-white transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">Clubhouse</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Icon path={Icons.MapPin} className="w-4 h-4 text-mccGold mt-1 shrink-0" />
                <span>1 Hely Hutchinson Street<br />Mtunzini, 3867</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon path={Icons.Phone} className="w-4 h-4 text-mccGold shrink-0" />
                <span>035 340 1779</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon path={Icons.Mail} className="w-4 h-4 text-mccGold shrink-0" />
                <span>manager@mtunzinicc.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">The Experience</h4>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-xs text-gray-300 italic leading-relaxed">
                "We know the drill. You want a cold draught, the kids want to run wild. At MCC, you can actually finish a conversation while the little ones are safe."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-mccGold"></div>
                <span className="text-[10px] uppercase font-bold text-mccGold">The Parent Promise</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-[10px] text-gray-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Mtunzini Country Club. Built for the community.
        </div>
      </footer>

      {/* AI Assistant */}
      <ClubAssistant />
    </div>
  );
};

export default App;
