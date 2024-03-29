import About from "@/components/about/About";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import Classes from "@/components/classes/Classes";
import Hero from "@/components/hero/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brand />
    </main>
  );
}
