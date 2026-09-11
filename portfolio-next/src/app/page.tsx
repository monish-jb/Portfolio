import Link from "next/link";
import { ArrowRight, Cpu, Eye, Code2 } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function HomePage() {
  const { hero, selectedWork } = PORTFOLIO_CONTENT;

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
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
      {/* Hero Header Section */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-700">
          <span>Bannari Amman Institute of Technology — B.E. CSE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
          {hero.headline}
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed">
          {hero.description}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors"
          >
            <span>{hero.primaryCta.text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-medium text-sm transition-colors"
          >
            <span>{hero.secondaryCta.text}</span>
          </Link>
        </div>
      </section>

      {/* Core Technical Domains */}
      <section className="space-y-6 border-t border-neutral-200 pt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Core Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hero.coreCapabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="bg-white border border-neutral-200 rounded-xl p-6 space-y-4 hover:border-neutral-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                {getCapabilityIcon(idx)}
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">{cap.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{cap.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cap.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-6 border-t border-neutral-200 pt-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              Featured Work
            </h2>
            <h3 className="text-2xl font-bold text-neutral-900 mt-1">
              Case Studies & Software Systems
            </h3>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <span>View All ({selectedWork.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {selectedWork.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-4 hover:border-neutral-400 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Architecture Overview
                </span>
              </div>

              <h4 className="text-xl font-bold text-neutral-900">{project.title}</h4>
              <p className="text-neutral-700 font-medium text-base leading-relaxed">
                {project.outcome}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-50 border border-neutral-200 text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
