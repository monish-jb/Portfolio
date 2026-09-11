"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Eye, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

interface ProfileViewProps {
  setActiveTab: (tab: string) => void;
}

export default function ProfileView({ setActiveTab }: ProfileViewProps) {
  const { hero, selectedWork, about } = PORTFOLIO_CONTENT;

  const getCapabilityIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-5 h-5 text-neutral-900" />;
      case 1:
        return <Eye className="w-5 h-5 text-neutral-900" />;
      default:
        return <Code2 className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 max-w-4xl"
    >
      {/* Hero Statement Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700">
          <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
          <span>Bannari Amman Institute of Technology — B.E. CSE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {hero.headline}
        </h2>

        <p className="text-neutral-600 text-base leading-relaxed max-w-2xl">
          {hero.description}
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("portfolio")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-colors shadow-xs"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTab("flowground")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-sm transition-colors"
          >
            <span>Open Interactive Flowground</span>
          </button>
        </div>
      </div>

      {/* Engineering Story */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
          About & Technical Focus
        </h3>
        <div className="space-y-3 text-neutral-700 text-sm sm:text-base leading-relaxed">
          {about.bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Core Technical Domains */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
          Core Capabilities & Stack
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {hero.coreCapabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-neutral-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                {getCapabilityIcon(idx)}
              </div>
              <h4 className="font-bold text-neutral-900 text-base">{cap.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">{cap.desc}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {cap.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Project Preview */}
      <div className="space-y-4 pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Featured Case Study
          </h3>
          <button
            onClick={() => setActiveTab("portfolio")}
            className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {selectedWork.slice(0, 1).map((project) => (
          <div
            key={project.id}
            className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-neutral-400 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                {project.category}
              </span>
            </div>

            <h4 className="text-xl font-bold text-neutral-900">{project.title}</h4>
            <p className="text-neutral-800 font-medium text-sm sm:text-base leading-relaxed">
              {project.outcome}
            </p>

            <ul className="space-y-2 pt-2">
              {project.architecturePoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
