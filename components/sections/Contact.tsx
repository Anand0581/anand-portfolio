import Container from "../shared/Container";

export default function Contact() {
    return (
        <section className="pt-20 pb-24">
            <Container>
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        Let's Connect
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
                        Have an opportunity, project, or idea you'd like to
                        discuss? I'd be happy to connect.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="rounded-lg bg-zinc-100 px-6 py-3 font-medium text-zinc-900"
                        >
                            Get In Touch →
                        </a>

                        <a
                            href="/resume.pdf"
                            className="rounded-lg px-6 py-3 font-medium text-zinc-100"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}