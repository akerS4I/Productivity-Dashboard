# Productivity Dashboard ~ 🛠️⚡

A full-fledged task engine and workspace manager built to shake off the rust, flex some serious TypeScript architecture, and lock in a front-end role this summer.  

No basic "todo app" tutorials here — we're handling multi-layered state, strict typing boundaries, and real data persistence. Simple tasks? Sure, I'll clear them out for you, but this codebase is built to scale.

---

## What’s Under the Hood

- **Task Prioritization:** Because "high priority" shouldn't just be a red text label.
- **Categories & Tags:** Proper relational data structures, not just messy string arrays.
- **Progress Tracking:** Real-time completion metrics so you actually know where the day went.
- **Search & Filtering:** High-performance, client-side queries built to handle heavy data loads.
- **Local Persistence:** Hydrating state cleanly via `localStorage` ~ *migrating to Redux Toolkit soon™*.

---

## The Tech Stack

- **Vite:** Blazing fast HMR ~ because life is too short to watch Webpack compile.
- **pnpm:** Pure efficiency. Zero disk space wasted.
- **React + TS:** Strict mode enabled. No `any` allowed here.
- **Styling:** *TBD — weighing options between raw utility or clean components.*

---

## TS Gymnastics Practiced Here

- **Relational Interfaces:** Modeling nested relationships between `Tasks`, `Categories`, and `Tags` cleanly.
- **Utility Types:** Heavy use of `Omit<T>` for draft/creation payloads and `Partial<T>` for explicit, granular patches.
- **Generics:** Writing abstract filtering predicates that don't care about the underlying data shape.
- **Type Guarding:** Custom narrowing to handle messy `localStorage` parsing and DOM events without breaking production.

---

## "Run It Locally"

### 1. Clone the playground

git clone [https://github.com/akerS4I/Productivity-Dashboard.git](https://github.com/akerS4I/Productivity-Dashboard.git)
2. Grab the dependencies
Bash
cd Productivity-Dashboard
pnpm install
3. Fire up the dev server
Bash
pnpm dev

> "polishing those coding skills so I can build smth actually exciting in the future :P"
