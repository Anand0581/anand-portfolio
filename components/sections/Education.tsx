import Container from "../shared/Container";

export default function Education() {
    return (
        <section className="pt-20">
            <Container>
                <div className="flex flex-col gap-8 max-w-3xl">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        Education
                    </h2>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold text-zinc-100">
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
    );
}