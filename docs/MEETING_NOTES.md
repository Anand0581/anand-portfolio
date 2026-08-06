# Meeting Notes

## Sprint 1

### Outcomes

- Project vision finalized
- Design research completed
- Design principles approved
- Information architecture approved

---

## Sprint 2 - Day 1

### Outcomes

- Repository created
- Development environment setup
- SSH configured
- Next.js initialized
- Folder structure finalized
- Engineering standards established

---

Future sprint notes will be added below.

# Sprint 2 - Day 2

## What we completed

- Built reusable Container component.
- Implemented Header semantic structure.
- Learned semantic HTML.
- Learned Flexbox.
- Learned Border, Padding and Margin.
- Understood Tailwind utility naming patterns.
- Finalized Header layout.
- Finalized Logo typography.

---

## Important Discussions

- Why semantic HTML matters.
- Parent vs Child responsibilities.
- Fixed Header height discussion.
- Future localization considerations.
- Typography hierarchy.
- Pattern Recognition over memorization.

---

## Outcome

Project Everest officially moved beyond a starter template.

The project now has a solid engineering foundation before moving to Hero development.

# Sprint 2

## Header v1 Completed

Completed:

- Container integration
- Header layout
- Navigation
- Resume CTA
- Typography
- Color system
- Hover interactions

## Hero Planning Completed

Hero content finalized.

Final Hero Copy:

Hi, I'm Anand.

Senior Android Engineer

I build scalable Android applications that reach millions of users with a strong focus on performance, Clean Architecture, and exceptional user experience.

Primary CTA:

- Resume
- Contact

## Next Milestone

Hero implementation.

# Meeting Notes

## Date
2026-08-04

---

## Hero Section Progress

### Completed

- Hero component created
- Hero connected to app/page.tsx
- Greeting finalized
- Hero Heading finalized
- Hero Description finalized

---

## Typography Decisions

### Greeting

Tag:
<p>

Classes:
text-base
font-normal
text-zinc-400

Reason:
Secondary information.
Should introduce the person without competing with the Hero Heading.

---

### Hero Heading

Tag:
<h1>

Content:
Senior Android Engineer

Classes:
text-3xl
font-bold
text-zinc-100

Reason:
Primary message of the Hero.
Immediately communicates profession.
Matches Project Everest's calm and premium design language.

---

### Description

Classes:
text-lg
text-zinc-300
max-w-3xl
leading-relaxed

Reason:
Supports the Hero Heading.
Builds credibility.
Improves readability through controlled width and relaxed line spacing.

---

## CTA Decisions

Buttons

- Resume
- Contact

Layout

Horizontal

Reason

Actions are alternatives, not sequential steps.

Order

Resume → Contact

Reason

Represents the most common recruiter journey while keeping Contact immediately available.

---

## Architecture

Container remains the single source of truth for horizontal spacing.

Hero uses Container.

No duplicated horizontal padding.

---

## Git

Removed unnecessary .gitkeep from components/sections.

Hero connected through app/page.tsx.

# Meeting Notes

## Sprint Management Discussion

Topics covered:

- Sprint Responsibility
- Sprint Goal
- Ordered Backlog
- Move vs Copy
- Sprint Board
- Blocked State
- Sprint Health
- Milestones

Result:

Sprint Management System v1.0 approved.

---

## Vocabulary Approved

SOD

Back to the Mountain

Base Camp

EOD

---

## Base Camp

Purpose:

Update sprint progress.

Workflow:

Developer reports:

- Completed
- Current
- Blockers
- Notes

Assistant updates:

- Sprint Board
- Current Progress
- Next Task
- Sprint Status

---

## Future Principle

Process should evolve only when justified by real problems.