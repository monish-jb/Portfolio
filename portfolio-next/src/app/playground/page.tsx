import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../../components/SocialIcons";
import { PORTFOLIO_CONTENT } from "../../data/portfolioContent";

export default function PlaygroundPage() {
  const { playground } = PORTFOLIO_CONTENT;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl border-b border-neutral-200 pb-10">
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          Playground & Experiments
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          Architectural prototypes, model visualizers, and algorithm explorations built to test theoretical concepts.
        </p>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {playground.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-neutral-400 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase text-neutral-400">
                  Prototype
                </span>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  title="Source Code"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-bold text-neutral-900 text-lg leading-snug">
                {item.title}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
              {item.tech.map((t) => (
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
    </main>
  );
}
