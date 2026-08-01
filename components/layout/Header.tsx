import Container from "@/components/shared/Container";

export default function Header() {
  return (
    <header className="h-20 border-b border-zinc-800">
      <Container>
        <nav className="flex h-full items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-zinc-100">Project Everest</div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
              Experience
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
              Projects
            </a>
            <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
              Contact
            </a>
          </div>

          <button className="
                rounded-full
                border
                border-zinc-700
                px-5
                py-2
                text-sm
                font-medium
                text-zinc-100
                hover:bg-zinc-900
                transition-colors
                duration-200">
            Resume
          </button>
        </nav>
      </Container>
    </header>
  );
}