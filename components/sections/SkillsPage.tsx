import Container from "../shared/Container";

const coreSkills = [
    {
        number: "01",
        title: "Android Engineering",
        description:
            "Building production-ready Android applications with a strong focus on maintainability, scalability, and user experience.",
        skills: [
            "Android SDK",
            "Kotlin",
            "Java",
            "Jetpack",
            "Android Architecture",
            "Multi-module Applications",
        ],
    },
    {
        number: "02",
        title: "Architecture & Design",
        description:
            "Designing maintainable and scalable application architectures that support product and team growth.",
        skills: [
            "MVVM",
            "MVI",
            "Clean Architecture",
            "Modularization",
            "SOLID Principles",
            "Scalable Application Design",
        ],
    },
    {
        number: "03",
        title: "Networking & Data",
        description:
            "Building reliable data layers and optimizing communication between mobile applications and backend systems.",
        skills: [
            "REST APIs",
            "Retrofit",
            "Room",
            "API Optimization",
            "Caching",
            "Pagination",
        ],
    },
    {
        number: "04",
        title: "Performance & Reliability",
        description:
            "Improving application responsiveness, memory usage, stability, and production reliability.",
        skills: [
            "Memory Optimization",
            "Application Responsiveness",
            "API Performance",
            "Build Optimization",
            "Performance Debugging",
            "Crash Analysis",
        ],
    },
    {
        number: "05",
        title: "Testing & Quality",
        description:
            "Maintaining software quality through testing, debugging, code reviews, and production-focused engineering practices.",
        skills: [
            "JUnit",
            "Mockito",
            "Debugging",
            "Code Reviews",
            "Crash Analysis",
            "Production Reliability",
        ],
    },
    {
        number: "06",
        title: "CI/CD & Developer Tools",
        description:
            "Improving engineering efficiency through automation, development tooling, and reliable build and release workflows.",
        skills: [
            "Jenkins",
            "Git",
            "CI/CD",
            "Build & Release Automation",
            "Development Tooling",
        ],
    },
    {
        number: "07",
        title: "AI-Assisted Development",
        description:
            "Using modern AI tools to improve development, debugging, exploration, and engineering workflows.",
        skills: [
            "GitHub Copilot",
            "Claude",
            "Cursor",
            "AI-assisted Development",
        ],
    },
];

const technologyDepth = [
    {
        title: "Android Engineering",
        description:
            "Production Android applications ko design aur build karna, from application architecture and feature development to debugging and production support.",
    },
    {
        title: "Architecture & Scalability",
        description:
            "Clean Architecture, MVVM/MVI, modularization aur scalable design principles ka use karke codebases ko maintainable aur evolveable rakhna.",
    },
    {
        title: "Performance Engineering",
        description:
            "Memory usage, application responsiveness, API performance aur build times ko analyze karke measurable improvements deliver karna.",
    },
    {
        title: "Reliability & Production Ownership",
        description:
            "Crash analysis, debugging, testing aur production issues ko investigate karke stable and reliable user experiences maintain karna.",
    },
    {
        title: "Engineering Efficiency",
        description:
            "Code reviews, CI/CD, build/release automation aur development tooling ke through development lifecycle ko efficient banana.",
    },
    {
        title: "Product & Team Collaboration",
        description:
            "Product, Design, QA aur backend teams ke saath requirements se production tak features own karna, while maintaining engineering quality.",
    },
];

const engineeringPrinciples = [
    {
        title: "Choose Simplicity Over Complexity",
        description:
            "I prefer solutions that are easy to understand, maintain, and evolve, while introducing complexity only when the problem genuinely requires it.",
    },
    {
        title: "Design Around the Problem",
        description:
            "I start by understanding the product requirement and engineering constraints before choosing an architecture, pattern, or technology.",
    },
    {
        title: "Measure Before Optimizing",
        description:
            "For performance issues, I rely on profiling, debugging, and measurable data rather than assumptions.",
    },
    {
        title: "Build for Reliability",
        description:
            "Testing, crash analysis, error handling, and production monitoring are part of building a feature—not steps added after development.",
    },
    {
        title: "Think Beyond the Feature",
        description:
            "I consider maintainability, scalability, developer experience, and future product needs while designing solutions.",
    },
    {
        title: "Use Technology as a Tool",
        description:
            "I focus on solving the problem effectively rather than using a technology simply because it is newer or more popular.",
    },
];

const generativeAiAreas = [
    "Large Language Models (LLMs)",
    "Prompt Engineering",
    "Retrieval-Augmented Generation (RAG)",
    "Embeddings & Vector Databases",
    "AI-assisted Development",
    "LLM Application Development",
    "AI-powered Application Architecture",
    "Generative AI Fundamentals",
];

export default function SkillsPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="py-20 md:py-24">
                <Container>
                    <div className="flex max-w-3xl flex-col gap-6">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
                            Skills
                        </h1>

                        <p className="text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                            A focused view of the technologies, engineering practices,
                            and areas of expertise I use to build reliable and scalable
                            software.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Core Engineering Skills */}
            <section className="pb-20">
                <Container>
                    <div className="flex flex-col gap-10">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                Core Engineering Skills
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                A practical set of technologies and engineering
                                capabilities developed through production experience.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {coreSkills.map((group) => (
                                <article
                                    key={group.number}
                                    className="border border-zinc-800 p-6 md:p-7"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-start gap-4">
                                            <span className="pt-1 text-sm text-zinc-500">
                                                {group.number}
                                            </span>

                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-xl font-semibold text-zinc-100">
                                                    {group.title}
                                                </h3>

                                                <p className="text-sm leading-6 text-zinc-400">
                                                    {group.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-zinc-800 pt-5">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-sm text-zinc-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Technology Depth */}
            <section className="border-t border-zinc-800 py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                Technology Depth
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                My experience goes beyond individual technologies, with a
                                focus on applying them to real engineering problems.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {technologyDepth.map((item, index) => (
                                <article
                                    key={item.title}
                                    className={`py-8 ${
                                        index !== 0 ? "border-t border-zinc-800" : ""
                                    }`}
                                >
                                    <div className="grid gap-4 md:grid-cols-[240px_1fr] md:gap-10">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            {item.title}
                                        </h3>

                                        <p className="max-w-3xl leading-7 text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* How I Work With Technology */}
            <section className="border-t border-zinc-800 py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                How I Work With Technology
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                Technology decisions are driven by the problem, product
                                requirements, and long-term engineering needs.
                            </p>
                        </div>

                        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                            {engineeringPrinciples.map((principle) => (
                                <article
                                    key={principle.title}
                                    className="border-t border-zinc-800 pt-6"
                                >
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            {principle.title}
                                        </h3>

                                        <p className="leading-7 text-zinc-400">
                                            {principle.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Generative AI */}
            <section className="border-t border-zinc-800 py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                Generative AI
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                I am expanding my engineering skill set into Generative
                                AI, exploring how LLMs and AI-powered technologies can
                                be applied to build practical software solutions.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {generativeAiAreas.map((area) => (
                                <div
                                    key={area}
                                    className="border border-zinc-800 p-5"
                                >
                                    <p className="text-sm leading-6 text-zinc-300">
                                        {area}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-zinc-800 pt-8">
                            <div className="flex max-w-3xl flex-col gap-4">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    Current Focus
                                </h3>

                                <p className="leading-7 text-zinc-400">
                                    Understanding how LLMs work under the hood, from
                                    tokenization and embeddings to attention, retrieval,
                                    RAG pipelines, inference, and application integration.
                                </p>
                            </div>
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
        </main>
    );
}