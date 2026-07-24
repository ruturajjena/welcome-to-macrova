import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Languages } from "@/components/sections/Languages";
import { PreviewReel } from "@/components/sections/PreviewReel";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Walkthrough />
        <HowItWorks />
        <Languages />
        <PreviewReel />
        <Reviews />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
