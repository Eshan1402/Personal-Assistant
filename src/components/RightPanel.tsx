"use client";

import React, { useState, useEffect } from "react";
import { Mail, Briefcase, Brain, Lock } from "lucide-react";

// Define the Job type for TypeScript
type JobTag = { label: string; type: string };
type Job = {
  title: string;
  company: string;
  time: string;
  tags: JobTag[];
};

export default function RightPanel() {
  const [jobs, setJobs] = useState<Job[]>([]);
  
  useEffect(() => {
    // Fetch dynamically from our local jobs.json populated by the automated scraper
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data.slice(0, 5))) // Show top 5
      .catch(err => console.error("Failed to fetch jobs:", err));
  }, []);

  const emails = [
    { sender: "LinkedIn", subject: "New jobs for you: Software Engineer", time: "10:24 AM", status: "blue" },
    { sender: "HackerRank", subject: "New ML Engineer opportunities", time: "09:12 AM", status: "grey" },
    { sender: "Amazon Jobs", subject: "Your application has been received", time: "Yesterday", status: "lock" },
    { sender: "Google Careers", subject: "Recommended for you: SWE II", time: "Yesterday", status: "orange" },
    { sender: "Naukri.com", subject: "10 new jobs matching your profile", time: "Yesterday", status: "orange" },
  ];

  return (
    <div className="w-[320px] h-full flex flex-col gap-6 pr-6 py-6 z-10 flex-shrink-0">
      
      {/* Recent Emails */}
      <div className="glass-panel rounded-2xl p-5 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="text-[var(--color-status-orange)]">
              <Mail size={18} className="fill-[var(--color-status-red)] text-transparent" />
            </div>
            <h2 className="text-white font-semibold text-sm">Recent Emails</h2>
          </div>
          <button className="text-[11px] text-[var(--color-secondary)] hover:text-white transition-colors flex items-center gap-1">
            View all <span>→</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {emails.map((email, i) => (
            <div key={i} className="flex gap-3 group cursor-pointer">
              <div className="mt-1.5 flex-shrink-0">
                {email.status === 'blue' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />}
                {email.status === 'grey' && <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />}
                {email.status === 'orange' && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                {email.status === 'lock' && <Lock size={10} className="text-gray-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-sm text-gray-200 font-medium truncate pr-2 group-hover:text-white transition-colors">{email.sender}</span>
                  <span className="text-[10px] text-gray-500 flex-shrink-0">{email.time}</span>
                </div>
                <p className="text-xs text-gray-400 truncate">{email.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Job Updates */}
      <div className="glass-panel rounded-2xl p-5 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <Briefcase size={18} />
            <h2 className="text-white font-semibold text-sm">Latest Job Updates</h2>
          </div>
          <button className="text-[11px] text-[var(--color-secondary)] hover:text-white transition-colors flex items-center gap-1">
            View all <span>→</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {jobs.map((job, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="flex justify-between items-start mb-0.5">
                <span className="text-sm text-gray-200 font-medium group-hover:text-white transition-colors line-clamp-1 pr-2">{job.title}</span>
                <span className="text-[10px] text-gray-500 flex-shrink-0 mt-0.5">{job.time}</span>
              </div>
              <p className="text-[11px] text-gray-400 mb-2 truncate">{job.company}</p>
              <div className="flex gap-2">
                {job.tags.map((tag, j) => (
                  <span key={j} className={`text-[10px] px-2 py-0.5 rounded border border-opacity-20 font-medium ${
                    tag.type === 'green' ? 'text-[var(--color-status-green)] border-[var(--color-status-green)] bg-[rgba(34,197,94,0.05)]' :
                    tag.type === 'orange' ? 'text-[var(--color-status-orange)] border-[var(--color-status-orange)] bg-[rgba(249,115,22,0.05)]' :
                    'text-gray-400 border-gray-600 bg-[rgba(255,255,255,0.02)]'
                  }`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Quote Widget */}
      <div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[rgba(139,92,246,0.15)] flex items-center justify-center flex-shrink-0 border border-[rgba(139,92,246,0.3)]">
          <Brain size={20} className="text-[var(--color-primary-light)]" />
        </div>
        <p className="text-xs text-gray-300 italic font-medium leading-relaxed">
          "Consistency turns ideas<br/>into reality."
        </p>
      </div>

    </div>
  );
}
