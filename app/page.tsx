import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <section className="py-24">
          <h1 className="text-5xl font-bold">Project Everest</h1>
          <p className="mt-4 text-lg text-gray-600">
            Building something extraordinary.
          </p>
        </section>
      </Container>
    </main>
  );
}
