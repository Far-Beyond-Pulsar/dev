"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import OutlineText from "../OutlineText";
import { Terminal, NATIVE } from "./ui";

const FACTS = [
  ["Rust", "the whole engine, editor included"],
  ["25+", "first-party plugins, each its own repo"],
  ["MIT", "licensed, developed in the open"],
  ["Linux · Windows · macOS", "Linux gates every PR; all three run on main"],
];

export default function DevHero() {
  return (
    <section className="relative pt-36 pb-20 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(14,165,233,0.07),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-8">
              <span className="w-8 h-px bg-[#38bdf8]/70" />
              Developers
              <span className="h-3 w-px bg-white/15 ml-1" />
              <span className="text-amber-300/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                Early development
              </span>
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.02] mb-6">
              Build the
              <br />
              <OutlineText text="engine." color="rgba(56, 189, 248, 0.85)" />
            </h1>
            <p className="text-white/45 text-lg leading-relaxed max-w-xl mb-9">
              Everything you need to get Pulsar building, find your way around a workspace of
              hundreds of crates, and land your first change. The architecture is still moving, so
              the best time to shape it is now.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#start"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-colors"
              >
                Set up your environment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={NATIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] hover:border-white/[0.22] bg-white/[0.04] hover:bg-white/[0.07] text-white/80 hover:text-white font-mono text-[12px] uppercase tracking-[0.12em] rounded-md transition-all"
              >
                <Github className="w-4 h-4" />
                Browse the source
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <Terminal
              title="zero to running"
              lines={[
                "git clone --recursive https://github.com/Far-Beyond-Pulsar/Pulsar-Native",
                "cd Pulsar-Native",
                "# opens the voxel planet example in the editor",
                "just example voxel_planet",
              ]}
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
              Needs Rust, just and (on Linux) a few system packages: see step 01
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] mt-20">
          {FACTS.map(([v, l]) => (
            <div key={v} className="bg-black px-5 py-5">
              <div className="text-xl font-semibold tracking-tight text-white">{v}</div>
              <div className="text-[12px] text-white/35 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
