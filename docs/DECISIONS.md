# Engineering Decisions

## Technology

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Hosting: Vercel
- Repository: GitHub

---

## Architecture

- App Router
- Component-first development
- Reusable UI
- Responsive-first approach

---

## Git Strategy

- Conventional Commits
- Small commits
- Clear commit messages

---

## Project Philosophy

- Less Planning, More Building
- Foundation before Features
- Every file should justify its existence
- Introduce complexity only when it solves a real problem

---

# Sprint 2 - Day 2

## Header Height

Decision:
Use `h-20` for Header in v1.

Reason:
- Consistent layout rhythm.
- Predictable spacing.
- Matches premium SaaS design philosophy.

Future Consideration:
If localization (i18n) is introduced, revisit this decision.

Possible Solutions:
- whitespace-nowrap
- Responsive Navigation
- Adaptive Header Height

---

## Header Typography

Logo

Classes:

text-xl
font-semibold
tracking-tight
text-zinc-100

Reason:

- Premium appearance.
- Does not compete with Hero heading.
- Better visual hierarchy.

---

## Header Border

Use:

border-b
border-zinc-800

Reason:

Subtle separation without creating visual noise.