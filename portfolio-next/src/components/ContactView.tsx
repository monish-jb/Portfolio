"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function ContactView() {
  const { contact } = PORTFOLIO_CONTENT;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 max-w-4xl"
    >
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          {contact.headline}
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {contact.description} Feel free to message directly or connect via developer networks.
        </p>
      </div>

      {/* Direct Contact Card */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 max-w-2xl shadow-2xs">
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Direct Communication Channels
          </h3>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Monish</span>
            </a>

            <button
              onClick={() => copyToClipboard(contact.email, "email")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
            </button>

            <button
              onClick={() => copyToClipboard(contact.phone, "phone")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs transition-colors"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Phone className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? "Copied Phone!" : contact.phone}</span>
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-6 border-t border-neutral-100">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Developer Networks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-neutral-700" />
                <span className="font-semibold text-xs text-neutral-900">GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-neutral-700" />
                <span className="font-semibold text-xs text-neutral-900">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>

            <a
              href={contact.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-600">LC</span>
                <span className="font-semibold text-xs text-neutral-900">LeetCode</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
