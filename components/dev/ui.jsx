"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export const GH = "https://github.com/Far-Beyond-Pulsar";
export const NATIVE = `${GH}/Pulsar-Native`;
export const AGENTS = `${NATIVE}/blob/main/.agents`;

/** "03 / Title" kicker, same as every section on the main site. */
export function Kicker({ children }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
      <span className="w-8 h-px bg-[#38bdf8]/70" />
      {children}
    </p>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Heading({ kicker, title, children }) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">{title}</h2>
      {children && <p className="text-white/45 text-base leading-relaxed">{children}</p>}
    </Reveal>
  );
}

export function Code({ children }) {
  return (
    <code className="font-mono text-[0.85em] text-[#38bdf8]/85 bg-white/[0.05] px-1.5 py-0.5 rounded">{children}</code>
  );
}

/** A terminal-style block with a copy button. `lines` are shell commands or `# comments`. */
export function Terminal({ title = "shell", lines, className = "", prompt = true }) {
  const [copied, setCopied] = useState(false);
  const text = lines.filter((l) => !l.startsWith("#")).join("\n");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className={`bg-[#0b0c0e] border border-white/[0.08] ${className}`}>
      <div className="flex items-center justify-between px-4 h-9 border-b border-white/[0.07]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">{title}</span>
        </div>
        <button
          onClick={copy}
          aria-label="Copy commands"
          className="text-white/30 hover:text-white/70 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="px-4 py-4 overflow-x-auto font-mono text-[12.5px] leading-6">
        {lines.map((l, i) =>
          l.startsWith("#") ? (
            <div key={i} className="text-white/30">{l}</div>
          ) : (
            <div key={i} className="text-white/80">
              {prompt && <span className="text-[#38bdf8]/60 select-none">$ </span>}
              {l}
            </div>
          ),
        )}
      </pre>
    </div>
  );
}
