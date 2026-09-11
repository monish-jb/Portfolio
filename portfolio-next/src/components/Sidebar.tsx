"use client";

import { useState } from "react";
import { User, Briefcase, Zap, GraduationCap, Mail, MapPin, Copy, Check, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { personal, contact } = PORTFOLIO_CONTENT;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "flowground", label: "Flowground", icon: Zap, badge: "Interactive" },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <aside className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-neutral-200 lg:min-h-screen p-6 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        {/* Profile Card Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white font-extrabold text-2xl flex items-center justify-center shadow-sm">
              M
            </div>
            {/* Open to Work Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Work</span>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight">
              {personal.name}
            </h1>
            <p className="text-sm font-medium text-neutral-600 mt-0.5">
              {personal.role}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{personal.location}</span>
            <span>•</span>
            <span className="font-mono text-neutral-700">B.E. CSE @ BIT</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-2 pt-2">
          <a
            href={`mailto:${contact.email}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Message / Email</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
            </button>

            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Sidebar Tab Navigation */}
        <nav className="space-y-1.5 pt-4 border-t border-neutral-200">
          <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 px-3 mb-2">
            Navigation Menu
          </span>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-neutral-500"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-neutral-800 text-neutral-300"
                        : "bg-blue-50 text-blue-600 border border-blue-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="pt-6 border-t border-neutral-200 text-xs text-neutral-400 space-y-1">
        <p>© 2026 Monish J B</p>
        <p className="font-mono text-[11px]">Flowground V1.0 • Wall of Portfolios Theme</p>
      </div>
    </aside>
  );
}
