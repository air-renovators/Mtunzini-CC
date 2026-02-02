import React from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';
import { PageId } from '../types';

interface HomeProps {
  setPage: (id: PageId) => void;
}

const HomePage: React.FC<HomeProps> = ({ setPage }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <div className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-mccDark scale-105">
        <img
          src="/hero-community.jpg"
          alt="Coastal Zululand Horizon"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
        <div className="max-w-5xl space-y-8">
          <span className="inline-block text-mccGold uppercase tracking-[0.4em] text-[11px] font-bold py-2 px-4 border border-mccGold/30 rounded-full animate-pulse">
            Established for the community
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1]">
            Relaxed Quality in <br /><span className="italic text-mccGold font-normal font-serif">Zululand</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Championship golf, warm coastal sun, and the best lagoon views in the country. Your second home awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => setPage('membership')}
              className="bg-mccGold text-white px-10 py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-[#d4b06a] hover:-translate-y-1 transition-all shadow-xl"
            >
              Become a Member
            </button>
            <button
              onClick={() => setPage('facilities')}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-white hover:text-mccDark transition-all"
            >
              Explore Facilities
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
      </div>
    </div>

    {/* Philosophy Section */}
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-mccSand/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <Icon path={Icons.Flag} className="w-16 h-16 text-mccGold mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl text-mccGreen mb-8 leading-tight">The "Guilt-Free" Zone</h2>
        <p className="text-gray-600 leading-relaxed text-xl mb-12 font-light">
          We know the drill. You want a cold draught, the kids want to run wild. At MCC, you can finish a conversation while the little ones are safe on the playground. It’s relaxation for you, exhaustion for them.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-20 h-[1px] bg-mccGold"></div>
          <button
            onClick={() => setPage('about')}
            className="text-mccGold uppercase tracking-widest text-xs font-bold hover:text-mccGreen transition-colors"
          >
            Learn Our Story
          </button>
          <div className="w-20 h-[1px] bg-mccGold"></div>
        </div>
      </div>
    </section>

    {/* Interactive Grid */}
    <section className="grid md:grid-cols-2 lg:grid-cols-4 min-h-[600px]">
      <div className="bg-mccGreen text-white p-12 lg:p-16 flex flex-col justify-center items-start lg:col-span-2 group">
        <span className="text-mccGold uppercase tracking-[0.3em] text-[10px] font-bold mb-6">World-Class Fairways</span>
        <h3 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">9 Holes of Coastal<br /><span className="italic">Sublime Beauty</span></h3>
        <p className="text-gray-300 mb-10 leading-relaxed text-lg max-w-xl font-light">
          A challenging track for the "Weekend Warrior" and a scenic walk for the casual player. Shared with the local wildlife, our course is a true nature reserve experience.
        </p>
        <button
          onClick={() => setPage('facilities')}
          className="flex items-center gap-3 text-mccGold group-hover:gap-5 transition-all text-[11px] font-bold uppercase tracking-widest border-b border-mccGold pb-2"
        >
          View The Course <Icon path={Icons.ArrowRight} className="w-4 h-4" />
        </button>
      </div>
      <div className="lg:col-span-2 overflow-hidden relative h-[400px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
          alt="Lush Coastal Golf Course"
        />
        <div className="absolute inset-0 bg-mccGreen/10"></div>
      </div>

      <div className="overflow-hidden relative h-[400px] md:h-auto lg:col-span-2">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1974&auto=format&fit=crop"
          className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
          alt="Clubhouse Ambiance"
        />
        <div className="absolute inset-0 bg-mccDark/20"></div>
      </div>
      <div className="bg-mccSand text-gray-900 p-12 lg:p-16 flex flex-col justify-center items-start lg:col-span-2">
        <span className="text-mccGreen uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Social Heart</span>
        <h3 className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">Legendary Suppers &<br /><span className="italic">Cold Draughts</span></h3>
        <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-xl font-light">
          From the legendary Wednesday Curries to the Sunday Carvery that rivals grandmother's cooking. The clubhouse is where the "Bar Parliament" solves the world's problems.
        </p>
        <button
          onClick={() => setPage('events')}
          className="flex items-center gap-3 text-mccGreen hover:gap-5 transition-all text-[11px] font-bold uppercase tracking-widest border-b border-mccGreen pb-2"
        >
          Upcoming Specials <Icon path={Icons.ArrowRight} className="w-4 h-4" />
        </button>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-serif text-mccGreen mb-2">9</div>
            <div className="text-[10px] uppercase tracking-widest text-mccGold font-bold">Championship Holes</div>
          </div>
          <div>
            <div className="text-5xl font-serif text-mccGreen mb-2">4</div>
            <div className="text-[10px] uppercase tracking-widest text-mccGold font-bold">Tennis & Squash Courts</div>
          </div>
          <div>
            <div className="text-5xl font-serif text-mccGreen mb-2">350+</div>
            <div className="text-[10px] uppercase tracking-widest text-mccGold font-bold">Active Members</div>
          </div>
          <div>
            <div className="text-5xl font-serif text-mccGreen mb-2">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-mccGold font-bold">Family Focused</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;