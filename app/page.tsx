import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <section className="py-24">
          <Hero />
          <Experience />
        </section>
      </Container>
    </main>
  );
}
