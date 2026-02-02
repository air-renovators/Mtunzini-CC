
import React from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';

const AboutPage: React.FC = () => (
  <div className="pt-32 pb-24 animate-in fade-in duration-700">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="inline-block px-4 py-1 border border-mccGold/30 rounded-full mb-6">
        <span className="text-mccGold uppercase tracking-[0.3em] text-[10px] font-bold">Since 1954</span>
      </div>
      <h2 className="text-5xl md:text-7xl text-mccGreen mb-10 leading-tight">The Beating Heart<br/><span className="font-serif italic text-mccGold font-normal">of Mtunzini</span></h2>
      <div className="grid md:grid-cols-2 gap-12 text-left items-center">
        <div className="space-y-6">
           <p className="text-xl text-gray-700 leading-relaxed font-light">
            Mtunzini Country Club isn't about stiff collars and strict rules. It's about community, coastal living, and the shared love of the Zululand landscape.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Established decades ago by locals who wanted a sanctuary for sport and friendship, we've remained true to those roots. We are home to the "Optimistic Golfers," the "Tennis Aunties," and families from across the province.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop" alt="Mtunzini Landscape" className="w-full h-96 object-cover" />
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-24">
      {[
        { 
          title: "Community First", 
          desc: "We are the hub for Mtunzini locals. From fundraisers and weddings to the legendary Saturday rugby screenings.",
          icon: Icons.Users
        },
        { 
          title: "Sports Excellence", 
          desc: "Championship quality greens and well-maintained courts. We take our sport seriously, even if we play with a smile.",
          icon: Icons.Flag
        },
        { 
          title: "The Ultimate View", 
          desc: "Our deck offers a stunning panoramic view of the Umlalazi lagoon and dunes. The sunset capital of the coast.",
          icon: Icons.Utensils
        }
      ].map((item, i) => (
        <div key={i} className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 bg-mccSand rounded-2xl flex items-center justify-center mb-8 group-hover:bg-mccGold transition-colors">
            <Icon path={item.icon} className="w-8 h-8 text-mccGreen group-hover:text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-mccGreen">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Board/Team section simplified */}
    <div className="mt-32 bg-mccGreen py-24 px-6 rounded-[3rem] max-w-7xl mx-auto text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Meet the Team</h2>
        <p className="text-mccGold uppercase tracking-widest text-[10px] font-bold">Leading with Passion</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center group">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all border-4 border-mccGold/20">
            <img src="https://picsum.photos/300/300?1" alt="Manager" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl font-bold">Andre Van Wyk</h4>
          <p className="text-mccGold text-xs uppercase tracking-widest mt-2">Club Manager</p>
        </div>
        <div className="text-center group">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all border-4 border-mccGold/20">
            <img src="https://picsum.photos/300/300?2" alt="Pro" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl font-bold">Sarah Peters</h4>
          <p className="text-mccGold text-xs uppercase tracking-widest mt-2">Pro Shop Head</p>
        </div>
        <div className="text-center group">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all border-4 border-mccGold/20">
            <img src="https://picsum.photos/300/300?3" alt="Events" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl font-bold">Busi Zulu</h4>
          <p className="text-mccGold text-xs uppercase tracking-widest mt-2">Events & Dining</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
