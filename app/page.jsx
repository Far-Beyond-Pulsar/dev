import DevHero from "@/components/dev/DevHero";
import { QuickStart, Paths, Architecture, PluginAnatomy, Workflow, ReadTheCode, Community } from "@/components/dev/Sections";

export default function DevHome() {
  return (
    <main className="bg-black">
      <DevHero />
      <QuickStart />
      <Paths />
      <Architecture />
      <PluginAnatomy />
      <Workflow />
      <ReadTheCode />
      <Community />
    </main>
  );
}
