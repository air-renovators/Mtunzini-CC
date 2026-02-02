
import React from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';

const ContactPage: React.FC = () => (
  <div className="pt-32 pb-24 animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        {/* Info Side */}
        <div className="space-y-12">
          <div>
            <span className="text-mccGold uppercase tracking-[0.4em] text-[11px] font-bold mb-6 block">The Heart of Mtunzini</span>
            <h2 className="text-6xl md:text-7xl text-mccGreen mb-8 leading-tight font-bold">Reach Out<br/><span className="italic font-serif text-mccGold font-normal">To Us</span></h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md">
              Whether you're booking a 4-ball, planning a wedding, or joining the "Bar Parliament," we're here to help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-mccSand rounded-2xl flex items-center justify-center text-mccGreen">
                <Icon path={Icons.MapPin} className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-mccGreen text-lg">Location</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                1 Hely Hutchinson Street<br/>Mtunzini, KZN, 3867<br/>South Africa
              </p>
              <button className="text-mccGold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Google Maps <Icon path={Icons.ArrowRight} className="w-3 h-3" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-mccSand rounded-2xl flex items-center justify-center text-mccGreen">
                <Icon path={Icons.Phone} className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-mccGreen text-lg">Contact Info</h4>
              <p className="text-sm text-gray-500">
                Clubhouse: 035 340 1779<br/>
                Pro Shop: Ext. 102<br/>
                Restaurant: Ext. 105
              </p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-mccGreen rounded-full flex items-center justify-center text-white">
                <Icon path={Icons.Mail} className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Direct Email</p>
                <p className="text-sm font-bold text-mccGreen">manager@mtunzinicc.co.za</p>
              </div>
            </div>
            <Icon path={Icons.ArrowRight} className="w-5 h-5 text-mccGold" />
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-mccGold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-3xl font-serif text-mccGreen mb-10">Send a Message</h3>
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-mccGold transition-all outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-mccGold transition-all outline-none" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Inquiry Type</label>
              <select className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-mccGold outline-none appearance-none">
                <option>Membership Inquiry</option>
                <option>Event/Wedding Booking</option>
                <option>Golf Tournament</option>
                <option>General Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help?"
                className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-mccGold transition-all outline-none resize-none"
              ></textarea>
            </div>
            <button className="w-full py-5 rounded-2xl bg-mccGreen text-white font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-mccGold hover:scale-[1.02] transition-all shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
