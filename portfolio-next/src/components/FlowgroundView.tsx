"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Play, RotateCcw, Cpu, Eye, GitBranch, ArrowRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function FlowgroundView() {
  const { playground } = PORTFOLIO_CONTENT;

  // Active Flowground Simulator state
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const agentSteps = [
    { name: "Patient Input & Audio Signal", status: "Voice-to-Text Transcribed", detail: "Symptoms: Chest tightness, mild dyspnea." },
    { name: "Triage Agent (Mistral LLM)", status: "Condition Prediction: 84% Cardiology", detail: "Triggered follow-up question matrix & urgency score 4/5." },
    { name: "Department Routing Agent", status: "Mapped: Cardiology Specialist Dept", detail: "Selected Hospital Unit A & Emergency Specialist queue." },
    { name: "Doctor & Follow-up Agent", status: "Appointment Booking Confirmed", detail: "Generated pre-appointment care guidance & instructions." }
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= agentSteps.length - 1) {
          clearInterval(interval);
          setIsSimulating(false);
          return agentSteps.length - 1;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 max-w-4xl"
    >
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Flowground Simulator & Interactive Lab</span>
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Interactive Architecture Flowground
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Simulate multi-agent AI execution states, frame-by-frame posture vectors, and algorithmic transitions in real time.
        </p>
      </div>

      {/* Interactive Simulator Card */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-base">
                Multi-Agent Triage Pipeline Simulator
              </h3>
              <p className="text-xs text-neutral-500">
                Click run to simulate LLM state transitions across agents.
              </p>
            </div>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            {isSimulating ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isSimulating ? "Executing..." : "Run Flow Simulation"}</span>
          </button>
        </div>

        {/* Node Flow Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {agentSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <div
                key={step.name}
                className={`p-4 rounded-xl border transition-all ${
                  isActive
                    ? "bg-blue-50/60 border-blue-400 ring-2 ring-blue-400/20 shadow-xs"
                    : isPassed
                    ? "bg-emerald-50/40 border-emerald-300"
                    : "bg-neutral-50 border-neutral-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-neutral-300">
                    Step {idx + 1}
                  </span>
                  {isPassed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
                  ) : null}
                </div>

                <h4 className="font-bold text-neutral-900 text-xs leading-snug">
                  {step.name}
                </h4>
                <p className="text-[11px] font-mono text-neutral-600 mt-1">
                  {step.status}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Payload Stream Log */}
        <div className="bg-neutral-950 text-neutral-200 rounded-xl p-4 font-mono text-xs space-y-2 border border-neutral-800">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800 pb-2">
            <span>LIVE EXECUTION STREAM LOG</span>
            <span className="text-emerald-400">ACTIVE STATE: STEP {activeStep + 1}/4</span>
          </div>

          <div className="space-y-1 text-neutral-300 pt-1">
            <p className="text-blue-400">
              &gt; Agent initialized: {agentSteps[activeStep].name}
            </p>
            <p className="text-emerald-300">
              &gt; Payload result: {agentSteps[activeStep].status}
            </p>
            <p className="text-neutral-400">
              &gt; Context: {agentSteps[activeStep].detail}
            </p>
          </div>
        </div>
      </div>

      {/* Experimental Side Prototypes Grid */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
          Experimental Lab Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {playground.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-2xs hover:border-neutral-400 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold uppercase text-neutral-400">
                  Prototype Lab
                </span>
                <h4 className="font-bold text-neutral-900 text-sm leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-neutral-100">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-300 text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
