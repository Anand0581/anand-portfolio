import Container from "@/components/shared/Container";

export default function Header() {
  return (
    <header className="h-20 border-b border-zinc-800">
      <Container>
        <nav className="flex h-full items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-zinc-100">Project Everest</div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#experience" className="hover:text-black">
              Experience
            </a>
            <a href="#projects" className="hover:text-black">
              Projects
            </a>
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>

          <button className="border border-zinc-700 rounded-full px-5 py-2">
            Resume
          </button>
        </nav>
      </Container>
    </header>
  );
}