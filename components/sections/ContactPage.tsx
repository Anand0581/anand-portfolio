import Container from "../shared/Container";

const helpAreas = [
  {
    title: "Mobile Application Development",
    description:
      "Build and improve production-grade mobile applications with a strong focus on engineering quality and user experience.",
  },
  {
    title: "Product Engineering",
    description:
      "Turn product requirements and ideas into maintainable, scalable, and production-ready software.",
  },
  {
    title: "Performance & Reliability",
    description:
      "Identify engineering bottlenecks and improve application responsiveness, stability, and resource usage.",
  },
  {
    title: "Technical Architecture",
    description:
      "Design practical technical approaches that support maintainability and long-term product growth.",
  },
];

const projectTypes = [
  "Build a New Product",
  "Improve an Existing Application",
  "Solve Engineering Challenges",
  "Scale an Application",
  "Technical Engineering Support",
];

const contactOptions = [
  {
    label: "Email",
    href: "mailto:anandkashyap600@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anand-kashyap-software-engineer",
  },
  {
    label: "GitHub",
    href: "https://github.com/Anand0581",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-5xl">
          {/* Hero */}
          <div className="max-w-3xl">

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Let’s Build Something Meaningful
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Have a product idea, an engineering challenge, or an existing
              application that needs improvement? Let’s talk about what you’re
              building and how I can help turn it into reliable,
              production-ready software.
            </p>
          </div>

          {/* How I Can Help */}
          <section className="mt-20 border-t border-zinc-800 pt-10 sm:mt-24 sm:pt-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                How I Can Help
              </h2>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {helpAreas.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-medium text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Can Work On */}
          <section className="mt-20 border-t border-zinc-800 pt-10 sm:mt-24 sm:pt-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                What We Can Work On
              </h2>
            </div>

            <div className="mt-8 max-w-3xl">
              <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
                {projectTypes.map((item) => (
                  <li
                    key={item}
                    className="py-5 text-base text-zinc-300 sm:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Let's Talk */}
          <section className="mt-20 border-t border-zinc-800 pt-10 sm:mt-24 sm:pt-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                Let’s Talk
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Tell me what you’re building, the problem you’re trying to
                solve, and where you need engineering support. We can start
                with a conversation and figure out the right way forward.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:anandkashyap600@gmail.com"
                  className="inline-flex items-center rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </section>

          {/* Contact Options */}
          <section className="mt-20 border-t border-zinc-800 pt-10 sm:mt-24 sm:pt-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                Contact Options
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}