import Container from "../shared/Container";

export default function Skills() {
    const skillGroups = [
        {
            title: "Android Development",
            skills: ["Android SDK", "Kotlin", "Java", "Android Architecture"],
        },
        {
            title: "Architecture & Engineering",
            skills: [
                "MVVM",
                "Clean Architecture",
                "Multi-module Architecture",
                "Scalable Systems",
            ],
        },
        {
            title: "Concurrency & Performance",
            skills: [
                "Coroutines",
                "Multithreading",
                "Performance Optimization",
                "Debugging",
            ],
        },
        {
            title: "Data & Networking",
            skills: [
                "Retrofit",
                "REST APIs",
                "Room",
                "Local Data Management",
            ],
        },
        {
            title: "Dependency & Build",
            skills: ["Hilt", "Gradle", "CI/CD", "Jenkins"],
        },
    ];

    return (
        <section className="pt-20">
            <Container>
                <div className="flex flex-col gap-8 max-w-3xl">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        Skills
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <div
                                key={group.title}
                                className="flex flex-col gap-2"
                            >
                                <h3 className="text-xl font-semibold text-zinc-100">
                                    {group.title}
                                </h3>

                                <p className="text-base leading-relaxed text-zinc-400">
                                    {group.skills.join(" · ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}