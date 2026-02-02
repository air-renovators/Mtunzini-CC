import React from 'react';
import Icon from '../components/Icon';
import { Icons } from '../constants';

const MembershipPage: React.FC = () => (
  <div className="pt-32 pb-24 bg-mccSand/30 animate-in fade-in duration-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1 bg-white border border-gray-100 rounded-full mb-6 shadow-sm">
          <span className="text-mccGreen uppercase tracking-[0.3em] text-[10px] font-bold">Join the family</span>
        </div>
        <h2 className="text-5xl md:text-7xl text-mccGreen mb-6 leading-tight">Membership Packages</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          From full championship golf access to social memberships for those who just want the view and a brew.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-stretch">
        {/* Social */}
        <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold text-mccGreen mb-2">Social Member</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">For the community soul</p>
          <div className="mb-10">
            <span className="text-4xl font-serif text-mccGreen font-bold">R920</span>
            <span className="text-xs text-gray-500 tracking-widest uppercase ml-2">/ year</span>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "10% Bar & Restaurant Discount",
              "Reduced Venue Hire Rates",
              "Full Access to Clubhouse & Playground",
              "Invitation to all Club Social Events",
              "Voting rights at the AGM"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <Icon path={Icons.Check} className="w-5 h-5 text-mccGold shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-mccGreen text-mccGreen font-bold uppercase text-[10px] tracking-[0.2em] group-hover:bg-mccGreen group-hover:text-white transition-all">
            Apply Now
          </button>
        </div>

        {/* Full Golf - The Hero */}
        <div className="bg-mccGreen p-12 rounded-[2.5rem] shadow-2xl flex flex-col text-white transform md:-translate-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-mccGold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute top-6 right-6 bg-mccGold text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recommended</div>
          
          <h3 className="text-2xl font-bold mb-2">Full Golf</h3>
          <p className="text-xs text-mccGold uppercase tracking-widest mb-8 font-bold">The ultimate access</p>
          <div className="mb-10">
            <span className="text-5xl font-serif font-bold text-mccGold">R13,000</span>
            <span className="text-xs text-gray-300 tracking-widest uppercase ml-2">/ year</span>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "Unlimited Green Fees",
              "Golf Union Affiliation Included",
              "Reciprocity at sister clubs",
              "15% Bar & Restaurant Discount",
              "Priority bookings for tournaments",
              "All social membership perks"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <Icon path={Icons.Check} className="w-5 h-5 text-mccGold shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-5 rounded-xl bg-mccGold text-white font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-white hover:text-mccGreen transition-all">
            Unlock Full Access
          </button>
        </div>

        {/* Junior/Country */}
        <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold text-mccGreen mb-2">Junior / Country</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Specialized access</p>
          <div className="mb-10">
            <span className="text-4xl font-serif text-mccGreen font-bold">R1,800</span>
            <span className="text-xs text-gray-500 tracking-widest uppercase ml-2">/ year</span>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "Available for Scholars (<18)",
              "Country status for >50km away",
              "Reduced Green Fees",
              "Full Clubhouse usage",
              "Tournament eligibility"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <Icon path={Icons.Check} className="w-5 h-5 text-mccGold shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-mccGreen text-mccGreen font-bold uppercase text-[10px] tracking-[0.2em] group-hover:bg-mccGreen group-hover:text-white transition-all">
            Inquire Today
          </button>
        </div>
      </div>

      <div className="mt-24 max-w-3xl mx-auto bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-sm">
        <h4 className="text-xl font-bold text-mccGreen mb-4">Corporate Membership?</h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          We offer bespoke packages for companies looking to host clients, provide employee perks, or sponsor the club. Contact the manager for a tailored proposal.
        </p>
        <button className="text-mccGold font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all">
          Contact Manager <Icon path={Icons.ArrowRight} className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default MembershipPage;