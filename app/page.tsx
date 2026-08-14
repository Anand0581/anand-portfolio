import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <section className="py-24">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
        </section>
      </Container>
    </main>
  );
}
