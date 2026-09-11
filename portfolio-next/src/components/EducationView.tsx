"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function EducationView() {
  const { about } = PORTFOLIO_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 max-w-4xl"
    >
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800">
          <GraduationCap className="w-4 h-4 text-neutral-900" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Education & Milestones
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Academic foundation in Computer Science & Engineering and secondary education credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {about.education.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-neutral-400 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{item.degree}</h3>
                <p className="text-xs font-semibold text-neutral-600 mt-0.5">{item.institution}</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-800 font-semibold">
                {item.period}
              </span>
            </div>

            <ul className="space-y-2 pt-1">
              {item.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0 mt-1.5"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
