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

# Header v1 (Locked)

## Objective

Build a clean, minimal, recruiter-focused navigation that follows the overall design philosophy of Project Everest.

## Final Decisions

### Layout

- Header uses the shared `Container` component.
- Normal header (non-sticky) for Version 1.
- Three logical sections:
  - Brand Logo
  - Navigation
  - Resume CTA

### Brand

- Typography:
  - `text-xl`
  - `font-semibold`
  - `tracking-tight`
- Color:
  - `text-zinc-100`

### Navigation

- Semantic HTML:
  - `<nav>`
  - `<ul>`
  - `<li>`
  - `<a>`

- Typography:
  - `font-medium`

- Default color:
  - `text-zinc-400`

- Hover:
  - `text-zinc-100`

### Resume CTA

Outlined button.

Classes:

- rounded-full
- border
- border-zinc-700
- px-5
- py-2
- text-sm
- font-medium
- text-zinc-100
- transition-colors
- duration-200
- hover:bg-zinc-900

### Engineering Decisions

- Use semantic HTML whenever possible.
- Keep Header minimal.
- Resume is the primary CTA.
- Avoid unnecessary animations.
- Use `transition-colors` instead of `transition-all`.
- Accessibility enhancements moved to Phase 2.

# Decisions

## Hero Greeting

Approved

Tag:
<p>

Typography:
text-base
font-normal
text-zinc-400

Status:
Locked

---

## Hero Heading

Approved

Tag:
<h1>

Content:
Senior Android Engineer

Typography:
text-3xl
font-bold
text-zinc-100

Status:
Locked

---

## Hero Description

Approved

Content:
Building scalable Android applications with 8 years of experience, focusing on performance, architecture, and user experience.

Typography:
text-lg
text-zinc-300
max-w-3xl
leading-relaxed

Status:
Locked

---

## CTA

Buttons

Resume
Contact

Layout

Horizontal

Order

Resume
↓

Contact

Status:
Locked