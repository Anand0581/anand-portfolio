import Container from "../shared/Container";

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-20 pb-16">
                <Container>
                    <div className="flex max-w-3xl flex-col gap-6">
                        <h1 className="text-3xl font-bold text-zinc-100">
                            About Me
                        </h1>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            A little more about my journey, engineering mindset,
                            and the work I enjoy building.
                        </p>
                    </div>
                </Container>
            </section>

            {/* My Journey */}
            <section className="pb-20">
                <Container>
                    <div className="flex max-w-3xl flex-col gap-8">
                        <h2 className="text-2xl font-bold text-zinc-100">
                            My Journey
                        </h2>

                        <div className="flex flex-col gap-6">
                            <p className="text-base leading-relaxed text-zinc-400">
                                My journey in software engineering started with
                                a strong interest in building applications and
                                understanding how technology can solve
                                real-world problems. Over the years, I gradually
                                specialized in Android development and worked
                                across different products, teams, and technology
                                stacks.
                            </p>

                            <p className="text-base leading-relaxed text-zinc-400">
                                With experience in both product development and
                                large-scale applications, my focus evolved from
                                simply building features to thinking about
                                architecture, performance, maintainability, and
                                the overall engineering quality of a product.
                            </p>

                            <p className="text-base leading-relaxed text-zinc-400">
                                Today, I work primarily with Kotlin and Java on
                                Android, with a strong focus on scalable
                                architecture, performance optimization, and
                                building systems that can evolve with the
                                product and the team.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Engineering Philosophy */}
            <section className="pb-20">
                <Container>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl font-bold text-zinc-100">
                            Engineering Philosophy
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Keep It Simple
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    I prefer solutions that are easy to
                                    understand, maintain, and evolve over
                                    unnecessary complexity.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Design for Scale
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Architecture should support the product's
                                    growth without making everyday development
                                    unnecessarily difficult.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Performance Matters
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    A feature is not truly complete if it works
                                    but creates a poor experience. I consider
                                    performance and reliability part of the
                                    engineering process.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Build for People
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Good engineering is not only about code. It
                                    is also about creating better experiences
                                    for users and making systems easier for
                                    teams to work with.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What I Focus On */}
            <section className="pb-20">
                <Container>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl font-bold text-zinc-100">
                            What I Focus On
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Android Engineering
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Building production-ready Android
                                    applications with Kotlin and Java.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Architecture
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Designing maintainable systems using Clean
                                    Architecture, MVVM, modularization, and
                                    scalable engineering practices.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Performance & Reliability
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Improving application performance,
                                    stability, and overall user experience.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Developer Experience
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Improving development workflows, tooling,
                                    CI/CD, debugging, and engineering
                                    practices.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Generative AI
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    Exploring Generative AI, LLMs, and
                                    AI-powered application development as the
                                    next area of my engineering growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Education */}
            <section className="pb-20">
                <Container>
                    <div className="flex max-w-3xl flex-col gap-8">
                        <h2 className="text-2xl font-bold text-zinc-100">
                            Education
                        </h2>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold text-zinc-100">
                                BCA — Bachelor of Computer Applications
                            </h3>

                            <p className="text-base font-medium text-zinc-300">
                                MJP Rohilkhand University
                            </p>

                            <p className="text-sm text-zinc-400">
                                2014 — 2017
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="pb-24">
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
        </>
    );
}