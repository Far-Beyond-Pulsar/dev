"use client";

import { ArrowUpRight, Github, MessageSquare } from "lucide-react";
import { Heading, Reveal, Code, Terminal, GH, NATIVE, AGENTS } from "./ui";

const Card = ({ href, title, body, tag }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-[#0b0c0e] border border-white/[0.08] hover:border-white/[0.16] p-6 transition-colors flex flex-col"
  >
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-white font-semibold text-[16px] tracking-tight">{title}</h3>
      <ArrowUpRight className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors" />
    </div>
    <p className="text-white/45 text-sm leading-relaxed flex-1">{body}</p>
    {tag && (
      <span className="inline-block mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#38bdf8]/70">{tag}</span>
    )}
  </a>
);

/* ------------------------------------------------------------------ 01 */
export function QuickStart() {
  return (
    <section id="start" className="py-24 px-5 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <Heading kicker="01 / Quick start" title="From clone to a running editor.">
          The repository is a large Cargo workspace whose plugins and renderer are git submodules,
          so a plain clone will not build: clone recursively.
        </Heading>

        <div className="grid lg:grid-cols-2 gap-5">
          <Reveal>
            <Step n="1" title="Get the code">
              <Terminal
                lines={[
                  "git clone --recursive https://github.com/Far-Beyond-Pulsar/Pulsar-Native",
                  "# already cloned without --recursive?",
                  "just submodule-init",
                ]}
              />
            </Step>
          </Reveal>
          <Reveal delay={0.05}>
            <Step n="2" title="Install the toolchain">
              <p className="text-white/45 text-sm leading-relaxed mb-3">
                Rust installs the pinned version from <Code>rust-toolchain.toml</Code> on first build,
                with clippy, rustfmt and the wasm target. Install{" "}
                <a className="text-[#38bdf8]/80 hover:text-[#38bdf8]" href="https://github.com/casey/just" target="_blank" rel="noopener noreferrer">just</a>{" "}
                for the shortcuts below. On Ubuntu you also need:
              </p>
              <Terminal
                title="ubuntu"
                lines={[
                  "sudo apt install -y gcc g++ clang libfontconfig-dev libwayland-dev \\",
                  "  libwebkit2gtk-4.1-dev libxkbcommon-x11-dev libx11-xcb-dev \\",
                  "  libssl-dev libzstd-dev vulkan-validationlayers libvulkan1",
                ]}
              />
            </Step>
          </Reveal>
          <Reveal delay={0.1}>
            <Step n="3" title="Build and run">
              <Terminal
                lines={[
                  "just check      # cargo check, fastest feedback",
                  "just run        # the editor",
                  "just example voxel_planet",
                  "# voxel_moon, voxel_desert and voxel_blocks are the other examples",
                ]}
              />
            </Step>
          </Reveal>
          <Reveal delay={0.15}>
            <Step n="4" title="Before you open a PR">
              <Terminal
                lines={[
                  "just fmt        # formats Pulsar-Native's own crates",
                  "just clippy     # warnings are errors",
                  "just test       # cargo test --workspace",
                ]}
              />
            </Step>
          </Reveal>
        </div>
        <p className="mt-6 text-[12px] text-white/30 leading-relaxed max-w-2xl">
          A GPU with Vulkan, Metal or DX12 support is needed to run the editor. Tests that need a GPU
          are excluded from CI. The full command list is in the{" "}
          <a className="text-white/50 hover:text-white/80 underline underline-offset-2" href={`${NATIVE}/blob/main/justfile`} target="_blank" rel="noopener noreferrer">justfile</a>.
        </p>
      </div>
    </section>
  );
}

function Step({ n, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-[11px] text-[#38bdf8]/70">0{n}</span>
        <h3 className="text-white font-semibold tracking-tight">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ 02 */
const PATHS = [
  {
    title: "Engine core",
    body: "SceneDB, the archetype ECS, reflection, the virtual filesystem, scripting and the code generator that turns your project into a standalone Rust crate.",
    tag: "crates/core",
    href: `${NATIVE}/tree/main/crates/core`,
  },
  {
    title: "Helio renderer",
    body: "The GPU-driven renderer: passes, features, WGSL and render graphs. Rendering work has its own architecture skill you must read first.",
    tag: "Helio",
    href: `${GH}/Helio`,
  },
  {
    title: "Plugins",
    body: "Every object kind (meshes, lights, sky, water, voxels, physics, animation) is a plugin with its own repository. Small, self-contained, a good first contribution.",
    tag: "plugins/vendor",
    href: `${NATIVE}/tree/main/plugins/vendor`,
  },
  {
    title: "Editor and UI",
    body: "The level editor, file manager, inspector and the rest of the editor chrome, built on WGPUI, a GPU-accelerated UI framework forked from Zed's GPUI.",
    tag: "crates/editor",
    href: `${NATIVE}/tree/main/crates/editor`,
  },
  {
    title: "Docs and website",
    body: "Documentation, this site and the blog are all Next.js and Markdown. Fix a page, write a guide, or document a system you just learned.",
    tag: "far-beyond-pulsar.github.io",
    href: `${GH}/far-beyond-pulsar.github.io`,
  },
  {
    title: "Testing and reports",
    body: "Try the examples, break them and report what you find. Clear reproduction steps on a hardware and driver matrix are worth a lot to a renderer.",
    tag: "Issues",
    href: `${NATIVE}/issues`,
  },
];

export function Paths() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">
        <Heading kicker="02 / Where to contribute" title="Pick the layer that interests you.">
          You do not need to understand all of it. Each area has its own boundaries and its own
          documentation.
        </Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PATHS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className="flex">
              <Card {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 03 */
const LAYERS = [
  ["crates/core", "Engine fundamentals", "ECS, reflection, filesystem, LSP, settings, scripting, the plugin manager"],
  ["crates/subsystems", "Integration crates", "Physics (Rapier), scene graph, the glue between engine and renderer"],
  ["crates/editor", "Editor panels", "Level editor, inspector, file manager, log viewer, settings: the workspace chrome"],
  ["crates/ui", "WGPUI", "Vendored GPU-accelerated UI framework and component library, as submodules"],
  ["crates/agent-providers", "AI backends", "One crate per supported provider, behind a shared chat core"],
  ["crates/third-party", "Vendored deps", "Graphy (node graphs), config and other small path dependencies"],
  ["plugins/vendor", "Plugins", "Every object kind and editor tool, each its own repository and a workspace member"],
  ["crates/renderer/helio", "Helio", "The renderer, a submodule. It knows no object kind: plugins contribute features"],
];

export function Architecture() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
              <span className="w-8 h-px bg-[#38bdf8]/70" />
              03 / The shape of it
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
              The engine is a
              {" "}<br className="hidden sm:block" />
              factory for your game.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              Pulsar does not run your game inside the editor. On export it generates a separate
              Rust crate holding your reflected types, blueprints, scenes and asset manifests, and
              that crate compiles on its own against only the runtime crates it uses. If it
              compiles, your data matches the engine.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              The editor is built the same way, and an object&apos;s component is one typed value:
              edited in the inspector, ticked at runtime, mirrored to GPU rows and drawn by Helio.
            </p>
            <a
              href={`${AGENTS}/ROADMAP.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#38bdf8]/80 hover:text-[#38bdf8]"
            >
              Read the philosophy <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>

          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">Workspace map</div>
            <div className="grid gap-px bg-white/[0.08] border border-white/[0.08]">
              {LAYERS.map(([path, name, desc]) => (
                <div key={path} className="bg-[#0b0c0e] px-4 py-3.5 grid sm:grid-cols-[210px_1fr] gap-x-5 gap-y-1">
                  <code className="font-mono text-[12px] text-[#38bdf8]/80">{path}</code>
                  <div>
                    <div className="text-sm text-white/80 font-medium">{name}</div>
                    <div className="text-[12px] text-white/35 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 04 */
const ANATOMY = [
  ["api", "helio-<kind>-api", "Contracts other plugins read: keys, row ABIs, WGSL"],
  ["feature", "helio-pass-*", "The Helio feature and its render passes"],
  ["component", "<kind>_component", "SceneDB components, methods, runtime, file formats"],
  ["editor", "<kind>_editor", "Level editor UI, tools, thumbnails"],
  ["root", "<kind>_plugin", "The registrations: the one place the plugin contributes anything"],
];

export function PluginAnatomy() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">
        <Heading kicker="04 / Anatomy of a plugin" title="Every object kind has the same five crates.">
          Learn one plugin and you can read them all. Hosts reach a plugin only through its root
          crate, and a disabled plugin is simply absent: its classes, features, settings and editors
          are not registered.
        </Heading>
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <Reveal>
            <div className="grid gap-px bg-white/[0.08] border border-white/[0.08]">
              {ANATOMY.map(([k, crate, d]) => (
                <div key={k} className="bg-[#0b0c0e] px-4 py-3.5 grid grid-cols-[84px_1fr] gap-x-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 pt-0.5">{k}</span>
                  <div>
                    <code className="font-mono text-[12px] text-[#38bdf8]/80">{crate}</code>
                    <div className="text-[12px] text-white/35 mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Terminal
              title="pulsar-plugin.toml"
              prompt={false}
              lines={[
                '# beside the plugin\'s crates',
                'id = "pulsar.fog"            # the one stable identity',
                'name = "Fog"',
                'description = "Global and local fog media"',
                'enabled_by_default = true',
                'requires = []                # plugins it cannot work without',
                'root = "fog_plugin"          # the root crate in this directory',
              ].map((l) => l)}
            />
            <p className="mt-4 text-[13px] text-white/40 leading-relaxed">
              Projects switch plugins in <Code>Pulsar.toml</Code>. First-party plugins live in
              their own <Code>Plugin_&lt;Kind&gt;</Code> repositories and are pinned into the main
              workspace as submodules. Start with the{" "}
              <a className="text-[#38bdf8]/80 hover:text-[#38bdf8]" href={`${AGENTS}/PLUGIN_SYSTEM.md`} target="_blank" rel="noopener noreferrer">plugin system guide</a>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 05 */
const COMMANDS = [
  ["just check", "cargo check across the workspace"],
  ["just build / release", "Debug or release build of the editor"],
  ["just test", "cargo test --workspace"],
  ["just clippy", "Clippy with warnings denied"],
  ["just fmt", "Format Pulsar-Native's own crates"],
  ["just conformance", "Interpreted vs generated Rust, debug and release"],
  ["just submodule-init", "git submodule update --init --recursive"],
  ["just check-submodule-pins", "Every submodule pinned to a commit on its upstream main"],
];

const RULES = [
  ["Submodule changes merge dependency-first", "Merge the plugin or Helio PR into its own main, re-pin the submodule to that commit, then merge the Pulsar-Native PR."],
  ["Branch pushes do not run CI, PRs do", "A new push cancels the superseded run. Draft and docs-only PRs skip CI, so open a draft while you iterate."],
  ["Linux is the gate", "fmt, clippy, guards and nextest run on Linux per PR. Windows and macOS compile checks run on main and nightly."],
  ["TODOs need an issue", "A TODO comment must reference an issue (#123 or a URL). The check scans tracked source in the main repository."],
  ["Rendering work loads the Helio skill first", "Anything touching Helio, its plugins, WGSL, render graphs or GPU rows. Bug fixes and small changes count too."],
];

export function Workflow() {
  return (
    <section id="contribute" className="py-24 px-5 border-t border-white/[0.07] scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <Heading kicker="05 / Workflow" title="How a change gets in.">
          The day-to-day loop is short. The rules below are the ones that most often surprise new
          contributors.
        </Heading>
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">Commands</div>
            <div className="grid gap-px bg-white/[0.08] border border-white/[0.08]">
              {COMMANDS.map(([c, d]) => (
                <div key={c} className="bg-[#0b0c0e] px-4 py-3 grid sm:grid-cols-[210px_1fr] gap-x-4 gap-y-0.5">
                  <code className="font-mono text-[12px] text-[#38bdf8]/80">{c}</code>
                  <span className="text-[12px] text-white/40">{d}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">House rules</div>
            <ol className="grid gap-px bg-white/[0.08] border border-white/[0.08]">
              {RULES.map(([t, d], i) => (
                <li key={t} className="bg-[#0b0c0e] px-4 py-3.5 flex gap-4">
                  <span className="font-mono text-[11px] text-[#38bdf8]/60 pt-0.5">0{i + 1}</span>
                  <div>
                    <div className="text-sm text-white/80 font-medium">{t}</div>
                    <div className="text-[12px] text-white/35 mt-0.5 leading-relaxed">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 06 */
const DOCS = [
  ["ROADMAP", "Philosophy, core insights, architecture overview. Start here."],
  ["CRATES", "The complete crate layout and the plugin repository table."],
  ["ENGINE_LIFECYCLE", "InitGraph startup, EngineBackend, subsystem lifecycle."],
  ["PLUGIN_SYSTEM", "Project and dynamic plugins: descriptor, root crate, catalog."],
  ["ECS", "SceneDB's archetype ECS: World, queries, journals, schedule."],
  ["REFLECTION", "Reflectable, RuntimeTypeInfo and EngineClass."],
  ["RENDER_GRAPH", "IntoGraph, built-in pipelines, .rendergraph assets."],
  ["UI_CRATES", "Conventions for editor UI crates and their layout."],
  ["FILESYSTEM", "engine_fs virtual filesystem: local, remote and P2P providers."],
  ["CI", "Workflows, cost rules and how to trigger the full run."],
  ["THEMING", "Theme JSON schema, syntax highlighting, window backgrounds."],
  ["ANIMATION", "Animation assets, graphs, IK, root motion, hot reload."],
];

export function ReadTheCode() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">
        <Heading kicker="06 / Read the design docs" title="The architecture is written down.">
          The repository keeps a design document for each subsystem next to the code, and they are
          kept current as systems change. They are the fastest way in.
        </Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {DOCS.map(([name, d]) => (
            <a
              key={name}
              href={`${AGENTS}/${name}.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b0c0e] hover:bg-[#0f1013] px-4 py-4 transition-colors"
            >
              <div className="flex items-center justify-between">
                <code className="font-mono text-[12px] text-[#38bdf8]/80">{name}.md</code>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <div className="text-[12px] text-white/40 mt-1.5 leading-relaxed">{d}</div>
            </a>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-white/30">
          More than thirty documents in total:{" "}
          <a className="text-white/50 hover:text-white/80 underline underline-offset-2" href={AGENTS} target="_blank" rel="noopener noreferrer">
            browse the full .agents folder
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 07 */
const REPOS = [
  ["Pulsar-Native", "The engine and editor: the main workspace", NATIVE],
  ["Helio", "The GPU-driven renderer", `${GH}/Helio`],
  ["Community", "Contribution guidelines and community docs", `${GH}/Community`],
  ["far-beyond-pulsar.github.io", "This site's main half: pulsarnative.com", `${GH}/far-beyond-pulsar.github.io`],
  ["dev", "This developer site", `${GH}/dev`],
  ["Plugin_<Kind>", "One repository per first-party plugin", `${GH}?q=Plugin_&type=repositories`],
];

export function Community() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Heading kicker="07 / Repositories" title="Where everything lives." />
            <Reveal>
              <div className="grid gap-px bg-white/[0.08] border border-white/[0.08]">
                {REPOS.map(([n, d, h]) => (
                  <a
                    key={n}
                    href={h}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0b0c0e] hover:bg-[#0f1013] px-4 py-3.5 transition-colors flex items-center justify-between gap-4"
                  >
                    <div>
                      <code className="font-mono text-[12px] text-[#38bdf8]/80">{n}</code>
                      <div className="text-[12px] text-white/35 mt-0.5">{d}</div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-white/20 group-hover:text-white/60 transition-colors" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Heading kicker="08 / Talk to us" title="Ask early. Design in the open.">
              For anything larger than a bug fix, start a conversation before the code. It saves
              everyone a rewrite while the architecture is still moving.
            </Heading>
            <Reveal className="grid gap-3">
              {[
                ["Discord", "Real-time dev updates and brainstorming", "https://discord.gg/5eAKDC53SX", MessageSquare],
                ["GitHub Discussions", "Long-form design proposals and questions", `${GH.replace("github.com/", "github.com/orgs/")}/discussions`, MessageSquare],
                ["Roadmap", "Projects and milestones across the organisation", `${GH.replace("github.com/", "github.com/orgs/")}/projects`, Github],
                ["Open issues", "Find something to pick up", `${NATIVE}/issues`, Github],
              ].map(([t, d, h, Icon]) => (
                <a
                  key={t}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#0b0c0e] border border-white/[0.08] hover:border-white/[0.16] px-4 py-3.5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/35" />
                  <div className="flex-1">
                    <div className="text-sm text-white/80 font-medium">{t}</div>
                    <div className="text-[12px] text-white/35">{d}</div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
