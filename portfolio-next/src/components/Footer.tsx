import Link from "next/link";
import { PORTFOLIO_CONTENT } from "../data/portfolioContent";

export default function Footer() {
  const { contact } = PORTFOLIO_CONTENT;

  return (
    <footer className="bg-white border-t border-neutral-200 py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
        <div>
          <p>© 2026 Monish J B. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6 font-medium text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <Link href="/work" className="hover:text-neutral-900 transition-colors">Work</Link>
          <Link href="/playground" className="hover:text-neutral-900 transition-colors">Playground</Link>
          <Link href="/about" className="hover:text-neutral-900 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
          <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700">GitHub</a>
          <span>•</span>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700">LinkedIn</a>
          <span>•</span>
          <a href={contact.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
