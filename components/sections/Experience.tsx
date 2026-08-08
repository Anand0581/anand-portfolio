import Container from "../shared/Container";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
    return (
        <section>
            <Container>
                <div className="flex max-w-3xl flex-col gap-8">
                    <h2 className="text-2xl font-bold text-zinc-100">Experience</h2>
                    {/* Experience Items Wrapper */}
                    <div className="flex flex-col gap-12">
                            <ExperienceItem
                                role="SDE 3 (Android)"
                                company="Adobe Systems"
                                duration="2022 — 2026"
                                description="Worked on large-scale Android applications, focusing on scalable architecture, application performance, crash analysis, and delivering reliable user experiences."
                            />

                            <ExperienceItem
                                role="Senior Software Engineer (Android)"
                                company="Webkul Software"
                                duration="2019 — 2022"
                                description="Built and shipped 10+ Android applications for e-commerce clients, focusing on scalable mobile architecture, API performance, and Magento/WooCommerce integrations."
                            />
                        </div>
                    </div>
                
            </Container>
        </section>
    );
}