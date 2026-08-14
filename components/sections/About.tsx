import Container from "../shared/Container";

export default function About() {
    return (
        <section className="pb-20">
            <Container>
                <div className="flex flex-col gap-8 max-w-3xl">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        About
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="text-base text-zinc-400 leading-relaxed">
                            I'm a Senior Android Engineer with 8+ years of experience
                            building production-scale mobile applications. I enjoy
                            working on the engineering challenges behind reliable
                            software — from scalable architecture and performance
                            optimization to debugging complex production issues.
                        </p>

                        <p className="text-base text-zinc-400 leading-relaxed">
                            Over the years, I've developed a strong problem-solving
                            and ownership mindset. I like understanding the root
                            cause of a problem rather than simply applying a
                            workaround, and I care about building systems that
                            remain maintainable as they grow. I'm also continuously
                            exploring new technologies and ways of working, from
                            modern development practices to AI and broader software
                            engineering.
                        </p>

                        <p className="text-base text-zinc-400 leading-relaxed">
                            I believe good engineering is not just about writing
                            code that works, but understanding why it works, how it
                            will scale, and how it can be made better.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}