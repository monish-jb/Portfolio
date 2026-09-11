import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../../components/SocialIcons";
import { PORTFOLIO_CONTENT } from "../../data/portfolioContent";

export default function WorkPage() {
  const { selectedWork, dsaSection } = PORTFOLIO_CONTENT;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16">
      {/* Page Title Header */}
      <div className="space-y-4 max-w-2xl border-b border-neutral-200 pb-10">
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          Selected Work & Projects
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          Case studies of end-to-end AI systems built with multi-agent workflows, computer vision pipelines, and production backend routes.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-12">
        {selectedWork.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-neutral-200 rounded-xl p-8 space-y-6 shadow-2xs hover:border-neutral-400 transition-colors"
          >
            <div className="space-y-3">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-neutral-900">{project.title}</h2>
              <p className="text-neutral-800 font-medium text-base leading-relaxed">
                {project.outcome}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                Architecture Breakdown
              </h3>
              <ul className="space-y-2.5">
                {project.architecturePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
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
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* DSA Spotlight Section */}
      <div className="bg-neutral-900 text-white rounded-xl p-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Algorithmic Focus
          </span>
          <h2 className="text-2xl font-bold text-white">{dsaSection.title}</h2>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">
            {dsaSection.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {dsaSection.topics.map((t) => (
            <span key={t} className="text-xs font-mono px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={dsaSection.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-colors"
          >
            <span>LeetCode Profile ({dsaSection.leetcodeUsername})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={dsaSection.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-colors border border-neutral-700"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </main>
  );
}
