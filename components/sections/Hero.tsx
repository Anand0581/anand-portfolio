import Container from "../shared/Container";

export default function Hero() {
    return (
        <section>
            <Container>
                <div className="min-h-screen">
                    <div className="flex flex-col justify-center gap-6">
                        <p className="text-base font-normal text-zinc-400">Hi, I'm Anand.</p>
                        <h1 className="text-3xl font-bold text-zinc-100">Senior Android Engineer</h1>
                        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
                            Building scalable Android applications with 8 years of
                            experience, focusing on performance, architecture, and
                            user experience.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};