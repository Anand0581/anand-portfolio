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
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium">Resume</button>
                            <button className="px-6 py-3 text-zinc-100 font-medium">Contact Me</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};