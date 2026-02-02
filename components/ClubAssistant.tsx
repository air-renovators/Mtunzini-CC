
import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { Icons } from '../constants';
import { chatWithConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';

const ClubAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Mtunzini Country Club! How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      // Map history for Gemini
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await chatWithConcierge(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a technical glitch. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-100 transition-all transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-mccGreen text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-mccGold rounded-full flex items-center justify-center">
                <Icon path={Icons.Bot} className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Club Concierge</h4>
                <p className="text-[10px] text-gray-300">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <Icon path={Icons.X} className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-mccGold text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about golf, dining, or events..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-mccGold transition-colors"
            />
            <button 
              type="submit" 
              disabled={isTyping}
              className="w-10 h-10 bg-mccGreen text-white rounded-full flex items-center justify-center hover:bg-mccGold transition-colors disabled:opacity-50"
            >
              <Icon path={Icons.Send} className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-mccGreen text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all group"
        >
          <Icon path={Icons.Bot} className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-1 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">1</span>
        </button>
      )}
    </div>
  );
};

export default ClubAssistant;
