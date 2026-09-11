"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function PortfolioView() {
  const { selectedWork, dsaSection } = PORTFOLIO_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 max-w-4xl"
    >
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Selected Portfolio Case Studies
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Production AI frameworks, multi-agent LLM triage systems, and computer vision surveillance pipelines.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {selectedWork.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xs hover:border-neutral-400 transition-colors"
          >
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
              <p className="text-neutral-800 font-medium text-sm sm:text-base leading-relaxed">
                {project.outcome}
              </p>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-2">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                System Architecture
              </h4>
              <ul className="space-y-2">
                {project.architecturePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Links */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white border border-neutral-300 text-neutral-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Algorithmic & DSA Spotlight */}
      <div className="bg-white border-2 border-neutral-900 text-neutral-900 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
            <Code2 className="w-4 h-4" />
            <span>Problem Solving Spotlight</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900">{dsaSection.title}</h3>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            {dsaSection.description} Focus topics: {dsaSection.topics.join(" • ")}.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href={dsaSection.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors shadow-xs"
          >
            <span>LeetCode ({dsaSection.leetcodeUsername})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={dsaSection.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-xs transition-colors border border-neutral-300"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
