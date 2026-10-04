import Container from "../shared/Container";

const projects = [
    {
        number: "01",
        title: "Adobe Express",
        category: "Performance Engineering",
        overview:
            "Adobe Express is a large-scale creative application used by 100M+ users. I worked on Android development for core content-creation experiences, with a focus on media-heavy workflows, rendering performance, and application responsiveness.",
        challenge:
            "Content-creation workflows involve media-heavy operations such as editing and template rendering. These operations can put significant pressure on UI performance, especially when processing or rendering complex content.",
        workedOn: [
            "Led development of core content-creation features.",
            "Worked on media editing and template rendering modules.",
            "Developed Android features using Kotlin and modern Android architecture.",
            "Worked on performance improvements for media-heavy operations.",
            "Contributed to reliable feature development and production delivery.",
        ],
        approach:
            "For performance-sensitive workflows, the focus was on identifying areas affecting UI responsiveness and optimizing the media-heavy operations involved in the experience.",
        impact: [
            {
                value: "~18%",
                label: "Application responsiveness improvement",
            },
        ],
        technology:
            "Kotlin · MVVM · Hilt · Coroutines · CI/CD · Jenkins",
    },
    {
        number: "02",
        title: "Adobe Photoshop Express",
        category: "Growth + Experimentation + Platform Engineering",
        overview:
            "Adobe Photoshop Express is a large-scale image-editing application. As part of the Growth Team, I worked on experimentation-driven features while also contributing to Android performance and reliability improvements.",
        challenge:
            "Growth features needed to be validated through real user interaction data, while image-processing workflows required careful attention to memory usage and rendering performance.",
        workedOn: [
            "Worked as part of the Growth Team on experimentation-driven features.",
            "Built and evaluated multiple feature variants based on user interaction data.",
            "Independently built a Windows feature that enabled Photoshop Express to respond to the legacy Win + Shift + S screenshot shortcut.",
            "Worked on Android memory handling for high-resolution image processing.",
            "Improved rendering performance for filters and adjustments on large images.",
        ],
        approach:
            "Growth features followed an experiment-based approach where multiple variants were evaluated using user interaction data before selecting the successful variant for broader rollout. The Windows feature used low-level Windows system APIs to respond to the legacy shortcut and trigger the screenshot-capturing flow.",
        impact: [
            {
                value: "~3×",
                label: "MAU from the Windows shortcut feature",
            },
            {
                value: "~21%",
                label: "Reduction in OOM crashes",
            },
        ],
        technology:
            "Kotlin · RenderScript · MVVM · Clean Architecture · Room · Windows System APIs",
        specialFeature: true,
    },
    {
        number: "03",
        title: "E-Commerce Mobile Suite",
        category: "Multi-platform Engineering + Technical Leadership",
        overview:
            "At Webkul, I worked on a suite of e-commerce mobile applications for Magento, WooCommerce, and OpenCart, supporting the needs of 50+ global clients.",
        challenge:
            "Working across multiple e-commerce platforms and client requirements involved challenges around API performance, application resource usage, maintainability, and delivery coordination.",
        workedOn: [
            "Built and shipped 10+ Android applications for e-commerce use cases.",
            "Worked on native Android applications integrating with Magento, WooCommerce, and OpenCart.",
            "Worked on React Native applications for WooCommerce, supporting Android and iOS.",
            "Collaborated with backend and web teams for API integration and product requirements.",
            "Participated in application testing, debugging, publishing, and release activities.",
        ],
        approach:
            "The focus was on building maintainable mobile solutions while adapting implementations to different e-commerce platforms and client requirements. I also worked on API optimization, application resource usage, code reviews, mentoring, and delivery coordination.",
        impact: [
            {
                value: "~800ms → ~300ms",
                label: "API response time",
            },
            {
                value: "~20%",
                label: "Reduction in memory usage",
            },
            {
                value: "~30%",
                label: "Reduction in PR rework",
            },
        ],
        technology:
            "Kotlin · Java · Android SDK · Retrofit · REST APIs · Room · React Native · Magento · WooCommerce · OpenCart",
        leadership: true,
    },
];

const engineeringHighlights = [
    {
        value: "100M+",
        label: "Users",
    },
    {
        value: "~18%",
        label: "Responsiveness improvement",
    },
    {
        value: "~3×",
        label: "MAU",
    },
    {
        value: "10+",
        label: "Android applications",
    },
    {
        value: "4–5",
        label: "Person team led",
    },
    {
        value: "Android + iOS",
        label: "Application publishing",
    },
];

const projectApproach = [
    {
        title: "Understand",
        description:
            "I start by understanding the product problem, user needs, requirements, and engineering constraints before deciding on an implementation.",
    },
    {
        title: "Design",
        description:
            "I choose an architecture and technical approach that keeps the solution maintainable while supporting the current product and future growth.",
    },
    {
        title: "Build",
        description:
            "I focus on production-quality implementation, testing, debugging, and collaboration across engineering and product teams.",
    },
    {
        title: "Measure",
        description:
            "I use measurable outcomes such as performance, reliability, user interaction, and delivery metrics to understand whether the solution actually worked.",
    },
    {
        title: "Improve",
        description:
            "I use the results and production feedback to identify further improvements and evolve the solution where necessary.",
    },
];

export default function ProjectsPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="pt-20 pb-16 md:pt-24 md:pb-20">
                <Container>
                    <div className="flex max-w-3xl flex-col gap-6">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
                            Projects
                        </h1>

                        <p className="text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                            A selection of engineering projects where I’ve worked on
                            product development, performance, experimentation, and
                            scalable mobile applications.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Featured Projects */}
            <section className="pb-20">
                <Container>
                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <article
                                key={project.number}
                                className={`py-12 md:py-16 ${
                                    index !== 0
                                        ? "border-t border-zinc-800"
                                        : ""
                                }`}
                            >
                                <div className="flex flex-col gap-10">
                                    {/* Project Header */}
                                    <div className="flex flex-col gap-3">
                                        <span className="text-sm text-zinc-500">
                                            {project.number}
                                        </span>

                                        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
                                            {project.title}
                                        </h2>

                                        <p className="text-sm font-medium text-zinc-400">
                                            {project.category}
                                        </p>
                                    </div>

                                    {/* Overview */}
                                    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            Overview
                                        </h3>

                                        <p className="max-w-3xl leading-7 text-zinc-400">
                                            {project.overview}
                                        </p>
                                    </div>

                                    {/* Challenge */}
                                    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            Challenge
                                        </h3>

                                        <p className="max-w-3xl leading-7 text-zinc-400">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    {/* What I Worked On */}
                                    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            What I Worked On
                                        </h3>

                                        <ul className="flex max-w-3xl flex-col gap-3 pl-5 leading-7 text-zinc-400">
                                            {project.workedOn.map((item) => (
                                                <li
                                                    key={item}
                                                    className="list-disc"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technical Approach */}
                                    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            Technical Approach
                                        </h3>

                                        <p className="max-w-3xl leading-7 text-zinc-400">
                                            {project.approach}
                                        </p>
                                    </div>

                                    {/* Special Photoshop Feature */}
                                    {project.specialFeature && (
                                        <div className="border-t border-zinc-800 pt-10">
                                            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                                <h3 className="text-lg font-semibold text-zinc-100">
                                                    Independently Built Windows Feature
                                                </h3>

                                                <div className="flex max-w-3xl flex-col gap-4">
                                                    <p className="text-xl font-semibold text-zinc-100">
                                                        Win + Shift + S
                                                    </p>

                                                    <p className="leading-7 text-zinc-400">
                                                        Enabled Adobe Photoshop
                                                        Express to respond to
                                                        the legacy screenshot
                                                        shortcut using low-level
                                                        Windows system APIs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Leadership */}
                                    {project.leadership && (
                                        <div className="border-t border-zinc-800 pt-10">
                                            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                                <h3 className="text-lg font-semibold text-zinc-100">
                                                    Engineering, Team & Client
                                                    Ownership
                                                </h3>

                                                <div className="flex max-w-3xl flex-col gap-4">
                                                    <p className="leading-7 text-zinc-400">
                                                        Led a 4–5 person engineering
                                                        team across multiple mobile
                                                        projects while working
                                                        directly with clients
                                                        throughout the project
                                                        lifecycle.
                                                    </p>

                                                    <ul className="flex flex-col gap-3 pl-5 leading-7 text-zinc-400">
                                                        <li className="list-disc">
                                                            Understood and clarified
                                                            client requirements.
                                                        </li>
                                                        <li className="list-disc">
                                                            Shared development
                                                            progress updates.
                                                        </li>
                                                        <li className="list-disc">
                                                            Handled client-reported
                                                            issues and coordinated
                                                            their resolution.
                                                        </li>
                                                        <li className="list-disc">
                                                            Published applications
                                                            across Android and iOS.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Impact */}
                                    <div className="border-t border-zinc-800 pt-10">
                                        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
                                            <h3 className="text-lg font-semibold text-zinc-100">
                                                Impact
                                            </h3>

                                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                                {project.impact.map((metric) => (
                                                    <div
                                                        key={metric.label}
                                                        className="flex flex-col gap-2"
                                                    >
                                                        <p className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
                                                            {metric.value}
                                                        </p>

                                                        <p className="text-sm leading-6 text-zinc-400">
                                                            {metric.label}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technology */}
                                    <div className="border-t border-zinc-800 pt-8">
                                        <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                                            <h3 className="text-lg font-semibold text-zinc-100">
                                                Technology
                                            </h3>

                                            <p className="max-w-4xl leading-7 text-zinc-400">
                                                {project.technology}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Engineering Highlights */}
            <section className="border-t border-zinc-800 py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                Engineering Highlights
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                A few measurable outcomes and responsibilities
                                from the projects I’ve worked on.
                            </p>
                        </div>

                        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {engineeringHighlights.map((highlight) => (
                                <div
                                    key={highlight.label}
                                    className="border-t border-zinc-800 pt-6"
                                >
                                    <div className="flex flex-col gap-2">
                                        <p className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
                                            {highlight.value}
                                        </p>

                                        <p className="text-sm leading-6 text-zinc-400">
                                            {highlight.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* How I Approach Projects */}
            <section className="border-t border-zinc-800 py-20 md:py-24">
                <Container>
                    <div className="flex flex-col gap-12">
                        <div className="flex max-w-3xl flex-col gap-4">
                            <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
                                How I Approach Projects
                            </h2>

                            <p className="leading-7 text-zinc-400">
                                I focus on understanding the problem first,
                                building with measurable outcomes in mind,
                                and improving solutions based on real
                                engineering and product feedback.
                            </p>
                        </div>

                        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                            {projectApproach.map((step) => (
                                <article
                                    key={step.title}
                                    className="border-t border-zinc-800 pt-6"
                                >
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            {step.title}
                                        </h3>

                                        <p className="leading-7 text-zinc-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
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