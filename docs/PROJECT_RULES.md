# Project Everest Rules

## Core Philosophy

Build.
Ship.
Repeat.

---

## Rule 1

Responsibilities drive decisions.

---

## Rule 2

One concept at a time.

---

## Rule 3

Move.
Don't copy.

---

## Rule 4

Every process must justify its existence.

---

## Rule 5

Design for today's needs.

Keep the architecture ready for tomorrow.

---

## Rule 6

Sprint Health =

- Progress
- Time
- Blockers

---

## Rule 7

Milestones require measurable success criteria.

---

## Rule 8

Developer focuses on engineering.

System manages the process.

# Project Rules

## 1. One Mountain at a Time

Focus on one meaningful implementation goal at a time.

Complete the current mountain before moving to the next one.

---

## 2. Design for Today's Needs

Keep the architecture ready for tomorrow, but do not build tomorrow's requirements today.

> Design for today's needs. Keep the architecture ready for tomorrow.

---

## 3. One Concept at a Time

When implementing a concept, understand its responsibility and purpose before moving to the next concept.

---

## 4. Responsibility-Driven Components

Every wrapper and component should have a clear responsibility.

Avoid adding containers, classes, or abstractions without a defined purpose.

---

## 5. Avoid Premature Abstraction

Do not interrupt an active feature to build a reusable abstraction.

Complete the current feature first.

Extract common components when:

- Reuse is proven.
- Duplication exists.
- A clear shared responsibility has emerged.

> Extraction follows completion, not interruption.

---

## 6. Feature-Based Commits

During feature development, a commit should represent a meaningful completed unit of work.

Avoid micro-commits for individual lines, classes, or small styling changes.

Example:

```text
feat(hero): implement hero actions