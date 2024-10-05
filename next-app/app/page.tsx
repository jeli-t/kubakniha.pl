import { HeroSection } from "./UI/HeroSection/HeroSection";
import { Treningi } from "./UI/Treningi/Treningi";
import { About } from "./UI/About/About";
import { Contact } from "./UI/Contact/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Treningi />
      <About />
      <Contact />
    </>
  );
}
