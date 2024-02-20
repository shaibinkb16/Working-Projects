import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import About from "@/components/ui/About";
import Work from "@/components/ui/Work";
import Reviews from "@/components/ui/Reviews";
import Cta from "@/components/ui/Cta";

export default function Home() {
  return (<main>
    <Hero />
    <About />
    <Services />
    <Work />
    <Reviews />
    <Cta />
  </main>
  )
}
