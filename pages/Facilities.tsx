
import React from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';

const FacilitiesPage: React.FC = () => (
  <div className="pt-32 pb-24 animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
      <h2 className="text-5xl md:text-7xl text-mccGreen mb-6">Designed for<br/><span className="italic font-serif text-mccGold font-normal">Every Passion</span></h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">Everything you need for championship sport, family weekend relaxation, and unforgettable social gatherings.</p>
    </div>

    <div className="max-w-7xl mx-auto px-6 space-y-32">
      {/* Section: Golf */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-4 text-mccGold uppercase tracking-widest text-[11px] font-bold">
            <div className="w-12 h-[1px] bg-mccGold"></div>
            The 18-Tee Course
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-mccGreen leading-tight">World Class Fairways,<br/>Local Residents.</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            Our 9-hole course features 18 distinct tee boxes, offering a full par-72 challenge. Set against the Umlalazi Nature Reserve, your golfing experience is shared with zebras, impalas, and lush coastal vegetation.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-mccSand p-4 rounded-xl border border-mccGold/10">
              <h5 className="font-bold text-mccGreen text-sm mb-1 uppercase tracking-wider">Driving Range</h5>
              <p className="text-[11px] text-gray-500">Practice your swing daily from dawn till dusk.</p>
            </div>
            <div className="bg-mccSand p-4 rounded-xl border border-mccGold/10">
              <h5 className="font-bold text-mccGreen text-sm mb-1 uppercase tracking-wider">Pro Shop</h5>
              <p className="text-[11px] text-gray-500">Latest gear, apparel, and golf cart rentals.</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-mccGold/10 rounded-3xl group-hover:-inset-6 transition-all duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-[500px] object-cover rounded-2xl relative z-10 shadow-2xl" 
            alt="Scenic Coastal Golf Hole"
          />
        </div>
      </div>

      {/* Section: Tennis/Squash */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative group">
          <div className="absolute -inset-4 bg-mccGreen/10 rounded-3xl group-hover:-inset-6 transition-all duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-[500px] object-cover rounded-2xl relative z-10 shadow-2xl" 
            alt="Professional Tennis Court"
          />
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <div className="inline-flex items-center gap-4 text-mccGold uppercase tracking-widest text-[11px] font-bold">
            <div className="w-12 h-[1px] bg-mccGold"></div>
            Racquet Sports
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-mccGreen leading-tight">Serve, Smash, and<br/>Socialize.</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            Home to two all-weather tennis courts and two high-spec squash courts. Whether you're part of the Wednesday "Tennis Aunties" or the Thursday Squash Ladder, we have a league for you.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-mccGold rounded-full"></div> Floodlights for evening play
            </li>
            <li className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-mccGold rounded-full"></div> Professional coaching available
            </li>
            <li className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-mccGold rounded-full"></div> Active social leagues for all levels
            </li>
          </ul>
        </div>
      </div>

      {/* Section: Dining */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-4 text-mccGold uppercase tracking-widest text-[11px] font-bold">
            <div className="w-12 h-[1px] bg-mccGold"></div>
            The Deck & Dining
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-mccGreen leading-tight">Zululand's Finest<br/>Sundowner Spot.</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            Our clubhouse is the social epicenter of Mtunzini. Enjoy wood-fired pizzas, local craft beers, or our legendary Sunday Carvery while watching the sunset over the lagoon dunes.
          </p>
          <div className="p-8 bg-mccGreen rounded-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Icon path={Icons.Utensils} className="w-6 h-6 text-mccGold" />
              <span className="font-bold text-sm uppercase tracking-widest">Dining Highlights</span>
            </div>
            <div className="grid grid-cols-2 gap-8 text-xs text-gray-300">
              <div>
                <p className="font-bold text-mccGold mb-1">Wednesday Supper</p>
                <p>A town tradition. Chef's choice curry or roast.</p>
              </div>
              <div>
                <p className="font-bold text-mccGold mb-1">Sunday Carvery</p>
                <p>The roast that rivals grandmother's kitchen.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
            alt="Clubhouse Dining Area"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mccGreen/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white text-2xl font-serif italic">"The view alone is worth the membership fee."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FacilitiesPage;
