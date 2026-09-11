import { GraduationCap } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../../data/portfolioContent";

export default function AboutPage() {
  const { about } = PORTFOLIO_CONTENT;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-2xl border-b border-neutral-200 pb-10">
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          About & Education
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          Background, technical philosophy, and academic trajectory in Computer Science & Artificial Intelligence.
        </p>
      </div>

      {/* Essay Bio Section */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
          Personal Engineering Background
        </h2>

        <div className="space-y-5 text-neutral-700 text-base sm:text-lg leading-relaxed">
          {about.bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* Structured Education Section */}
      <section className="space-y-8 border-t border-neutral-200 pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700">
            <GraduationCap className="w-4 h-4 text-neutral-900" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900">
            Education & Academic Trajectory
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl">
          {about.education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs hover:border-neutral-400 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{item.degree}</h3>
                  <p className="text-sm font-medium text-neutral-600 mt-0.5">{item.institution}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700 font-semibold">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2.5 pt-2">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0 mt-2"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
