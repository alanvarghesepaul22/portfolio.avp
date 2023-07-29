import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Intro />
      <Skills />
    </main>
  );
}
