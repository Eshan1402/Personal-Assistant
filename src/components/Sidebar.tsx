"use client";

import React from "react";
import {
  MessageSquare,
  Mail,
  Search,
  FileText,
  Calendar,
  CheckSquare,
  Notebook,
  File,
  Settings,
  Menu,
  Infinity
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: MessageSquare, label: "Chat", active: true },
    { icon: Mail, label: "Inbox", badge: "12" },
    { icon: Search, label: "Job Search" },
    { icon: FileText, label: "Applications" },
    { icon: Calendar, label: "Calendar" },
    { icon: CheckSquare, label: "Tasks" },
    { icon: Notebook, label: "Notes" },
    { icon: File, label: "Resume" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-[285px] h-full flex flex-col glass-panel border-y-0 border-l-0 rounded-none bg-[rgba(5,8,16,0.6)] z-10 flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary-dark)] flex items-center justify-center text-white">
            <Infinity size={18} />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">Personal Assistant</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Your Personal AI Assistant</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 mt-6 overflow-y-auto space-y-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
              item.active
                ? "bg-[rgba(139,92,246,0.15)] text-white shadow-[inset_4px_0_0_0_var(--color-primary)]"
                : "text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.03)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <item.icon size={20} className={item.active ? "text-[var(--color-primary-light)]" : "text-gray-500 group-hover:text-gray-300"} />
              <span className={`text-[15px] ${item.active ? "font-semibold" : "font-medium"}`}>
                {item.label}
              </span>
            </div>
            {item.badge && (
              <div className="bg-[var(--color-status-red)] text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center justify-center">
                {item.badge}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Quote */}
      <div className="px-8 mt-auto mb-8 opacity-60">
        <blockquote className="font-mono text-sm leading-relaxed text-gray-300 relative">
          <span className="text-[var(--color-primary-light)] absolute -left-4 -top-1 text-lg">"</span>
          Build a life<br/>you don't need<br/>a vacation from.<span className="text-[var(--color-primary-light)] absolute text-lg">"</span>
        </blockquote>
        <div className="text-[var(--color-primary-light)] font-mono text-sm mt-3 font-bold">
          {"</>"}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-t border-[var(--color-nexus-border)] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex flex-shrink-0 items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(139,92,246,0.4)]">
          ES
        </div>
        <div className="overflow-hidden">
          <h3 className="text-white font-medium text-[15px] truncate">Eshan Saxena</h3>
          <p className="text-xs text-gray-400 truncate mt-0.5">Developer | Dreamer | Builder</p>
        </div>
      </div>
    </div>
  );
}
