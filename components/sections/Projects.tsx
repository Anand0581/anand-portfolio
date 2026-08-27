import Container from "../shared/Container";

export default function Projects() {
    const projects = [
        {
            title: "Adobe Express",
            description:
                "Built core content creation features for a 100M+ user platform, including media editing and template rendering, with a focus on performance and scalable Android architecture.",
            technologies: "Kotlin · MVVM · Hilt · Coroutines · CI/CD",
            href: "/projects/adobe-express",
        },
        {
            title: "Adobe Photoshop Express",
            description:
                "Optimized high-resolution image processing and rendering pipelines, reducing OOM crashes by ~40% and improving performance across low-to-mid-range devices.",
            technologies:
                "Kotlin · RenderScript · MVVM · Clean Architecture · Room",
            href: "/projects/photoshop-express",
        },
        {
            title: "E-Commerce Mobile Suite",
            description:
                "Built and delivered Android applications for Magento, OpenCart, and WooCommerce platforms used by 50+ global clients, while leading a team of developers.",
            technologies: "Kotlin · Retrofit · REST APIs · Room · Firebase",
            href: "/projects/ecommerce-mobile-suite",
        },
    ];

    return (
        <section className="pt-20">
            <Container>
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        Projects
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="flex flex-col gap-6 rounded-xl border border-zinc-800 p-6"
                            >
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl font-semibold text-zinc-100">
                                        {project.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-zinc-400">
                                        {project.description}
                                    </p>
                                </div>

                                <p className="text-sm leading-relaxed text-zinc-500">
                                    {project.technologies}
                                </p>

                                <a
                                    href={project.href}
                                    className="text-sm font-medium text-zinc-100"
                                >
                                    View Project →
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}