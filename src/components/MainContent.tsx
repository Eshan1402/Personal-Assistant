"use client";

import React from "react";
import { Mail, Search, Briefcase, FileText, Paperclip, Send, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MainContent() {
  const cards = [
    { icon: Mail, title: "Check my emails", desc: "Show unread & important" },
    { icon: Search, title: "Find new jobs", desc: "Based on my resume" },
    { icon: Briefcase, title: "Track applications", desc: "See latest status" },
    { icon: FileText, title: "Summarize anything", desc: "Docs, links, or threads" },
  ];

  const suggestions = [
    "Show me today's important emails",
    "Find latest SDE jobs for my profile",
    "Summarize my inbox",
    "What are the trending skills in 2026?",
    "Show my application status",
    "Plan my week",
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
      
      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mt-auto">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">
          <span>Think</span>
          <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          <span>Plan</span>
          <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          <span>Execute</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Hey Eshan,</h1>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary-light)] to-[#60a5fa] text-transparent bg-clip-text pb-4">
          How can I help you today?
        </h2>
        
        <p className="text-gray-400 text-[15px] mt-2 mb-12">
          Your personal AI assistant for a smarter, more productive you.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mb-12">
          {cards.map((card, i) => (
            <button key={i} className="glass-panel glass-panel-hover rounded-2xl p-5 text-left flex flex-col transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4 group-hover:bg-[rgba(139,92,246,0.1)] group-hover:border-[rgba(139,92,246,0.3)] transition-colors">
                <card.icon size={20} className="text-[var(--color-primary-light)]" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
              <p className="text-xs text-gray-400">{card.desc}</p>
            </button>
          ))}
        </div>

        {/* Suggestions */}
        <div className="w-full text-left mb-auto">
          <p className="text-sm text-gray-400 mb-4 ml-1">Try asking...</p>
          <div className="flex flex-wrap gap-3">
            {suggestions.map((text, i) => (
              <button key={i} className="glass-panel glass-panel-hover rounded-full px-5 py-2.5 text-xs text-gray-300 hover:text-white transition-all flex items-center gap-2 group">
                {text}
                <ArrowRight size={12} className="text-gray-500 group-hover:text-[var(--color-primary-light)] transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="w-full max-w-4xl mt-auto pb-8 pt-12">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative flex items-center glass-panel bg-[rgba(5,8,16,0.8)] rounded-2xl p-2 border border-[rgba(139,92,246,0.3)]">
            <button className="p-3 text-gray-400 hover:text-white transition-colors">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none px-2 py-3 text-[15px]"
            />
            <div className="flex items-center gap-3 pr-2">
              <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-lg transition-colors border border-[rgba(255,255,255,0.05)]">
                GPT-5 <ChevronDown size={14} />
              </button>
              <button className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white p-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-gray-500">
          <ShieldCheck size={12} />
          <p>Your data stays private. I work for you.</p>
        </div>
      </div>

    </div>
  );
}
