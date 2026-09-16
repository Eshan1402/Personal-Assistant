"use client";

import React from "react";
import { Search, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 w-full z-10">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search anything... (jobs, emails, files, etc.)"
          className="w-full bg-[rgba(15,23,42,0.6)] border border-[var(--color-nexus-border)] text-white text-sm rounded-xl pl-11 pr-14 py-3.5 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all placeholder-gray-500 backdrop-blur-md shadow-inner"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded px-1.5 py-0.5 text-xs text-gray-400 font-mono flex items-center gap-1">
            <span>⌘</span><span>K</span>
          </div>
        </div>
      </div>

      {/* Right User Info */}
      <div className="flex items-center gap-4 ml-8">
        <div className="flex items-center gap-3 text-right">
          <Sun size={20} className="text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Tue, 16 Sep 2026</p>
            <p className="text-sm text-white font-medium">Good Afternoon, Eshan</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden border border-gray-700">
          <img src="https://i.pravatar.cc/150?u=eshan" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
