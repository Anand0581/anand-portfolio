import Container from "../shared/Container";

export default function Hero() {
    return (
        <section>
            <Container>
                <div className="min-h-screen">
                    <div className="flex flex-col justify-center gap-6">
                        <p className="text-base font-normal text-zinc-400">
                            Hi, I'm Anand.
                        </p>

                        <h1 className="text-3xl font-bold text-zinc-100">
                            Senior Android Engineer
                        </h1>

                        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
                            Building scalable Android applications with 8 years of
                            experience, focusing on performance, architecture, and
                            user experience.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-zinc-100 px-6 py-3 font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                            >
                                Resume
                            </a>

                            <a
                                href="/contact"
                                className="rounded-lg px-6 py-3 font-medium text-zinc-100 transition-colors hover:text-white"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}