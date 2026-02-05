import React, { useState } from 'react';
import { HOLES_DATA, Icons } from '../constants';
import { Hole } from '../types';
import Icon from '../components/Icon';

const CoursePage: React.FC = () => {
    const [selectedHole, setSelectedHole] = useState<Hole | null>(null);

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="teAxt-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    The <span className="text-mccGold">Course</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                    Experience our 18-hole championship course. Explore each hole below with our video flyovers and detailed guides.
                </p>
            </div>

            {/* Holes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOLES_DATA.map((hole, index) => (
                    <div
                        key={hole.number}
                        onClick={() => setSelectedHole(hole)}
                        className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-mccGold/50 transition-all duration-300 hover:shadow-xl hover:shadow-mccGold/10 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <div className="aspect-video bg-black/40 relative flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            {/* Thumbnail placeholder or actual thumbnail if available */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:border-mccGold group-hover:bg-mccGold group-hover:text-black transition-all duration-300">
                                <Icon path={Icons.ArrowRight} className="w-5 h-5 ml-0.5" />
                            </div>

                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 bg-mccGold text-black font-bold flex items-center justify-center rounded-sm font-serif">
                                    {hole.number}
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flexjustify-between items-start mb-4">
                                <div>
                                    <div className="text-xs font-bold text-mccGold uppercase tracking-widest mb-1">
                                        Par {hole.par} • Stroke {hole.strokeIndex}
                                    </div>
                                    <div className="text-2xl font-serif text-white">
                                        {hole.distanceMeter}m
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                {hole.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedHole && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="absolute inset-0" onClick={() => setSelectedHole(null)}></div>

                    <div className="relative w-full max-w-5xl bg-mccDark border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-mccGold text-mccDark font-bold font-serif text-xl flex items-center justify-center rounded">
                                    {selectedHole.number}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-mccGold uppercase tracking-widest">
                                        Hole Details
                                    </div>
                                    <div className="text-white font-serif text-lg">
                                        Par {selectedHole.par} • {selectedHole.distanceMeter}m • SI {selectedHole.strokeIndex}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedHole(null)}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                            >
                                <Icon path={Icons.X} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Video Container */}
                        <div className="relative aspect-video bg-black">
                            {selectedHole.videoUrl ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={selectedHole.videoUrl}
                                    title={`Hole ${selectedHole.number} Flyover`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <Icon path={Icons.Video} className="w-12 h-12 mb-4 opacity-50" />
                                    <p>Video coming soon</p>
                                </div>
                            )}
                        </div>

                        {/* Hole Description */}
                        <div className="p-8 bg-white/5">
                            <h3 className="text-mccGold font-bold uppercase tracking-widest text-sm mb-3">Pro Tip</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {selectedHole.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoursePage;
