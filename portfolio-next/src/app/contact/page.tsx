"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/SocialIcons";
import { PORTFOLIO_CONTENT } from "../../data/portfolioContent";

export default function ContactPage() {
  const { contact } = PORTFOLIO_CONTENT;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16 bg-white">
      {/* Header */}
      <div className="space-y-4 max-w-2xl border-b border-neutral-200 pb-10">
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          {contact.headline}
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          {contact.description} Feel free to reach out directly via email, phone, or professional networks.
        </p>
      </div>

      {/* Primary Channels Card */}
      <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-8 max-w-2xl shadow-2xs">
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Direct Channels
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Email Monish</span>
            </a>

            <button
              onClick={() => copyToClipboard(contact.email, "email")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-medium text-sm transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
            </button>

            <button
              onClick={() => copyToClipboard(contact.phone, "phone")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-medium text-sm transition-colors"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Phone className="w-4 h-4" />}
              <span>{copiedPhone ? "Copied Phone!" : contact.phone}</span>
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4 pt-6 border-t border-neutral-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Developer Networks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-neutral-700" />
                <span className="font-semibold text-sm text-neutral-900">GitHub</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-neutral-700" />
                <span className="font-semibold text-sm text-neutral-900">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>

            <a
              href={contact.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-amber-600">LC</span>
                <span className="font-semibold text-sm text-neutral-900">LeetCode</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
