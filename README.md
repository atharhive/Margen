<div align="center">

# Margen

### A spatial research desk for keeping evidence attached to ideas.

**Collect papers, patents, lab notes, and archival material on one visual canvas.**

[Overview](#what-is-margen) · [Features](#what-it-does) · [Run locally](#run-locally) · [Project status](#project-status)

</div>

---

## What is Margen?

Research gets fragmented across PDFs, browser tabs, spreadsheets, scanned notebooks, and note-taking apps. A useful claim is only useful if you can find its source again.

Margen is an early-stage interface concept for bringing those materials onto a spatial research desk. It presents source excerpts, evidence cards, and research workflows together, with an emphasis on traceability: a note should remain connected to the document and location it came from.

The repository currently contains a polished, interactive frontend prototype. It is not yet a complete research platform: the included waitlist is browser-local, and the app does not currently upload, parse, or persist research documents on a backend.

## What it does

- **Organizes source material visually.** The prototype demonstrates a shared workspace for papers, patents, scanned notebooks, and tables.
- **Keeps evidence in context.** Research cards and source-coordinate cues illustrate how a claim can link back to a page, section, or table.
- **Shows example workflows.** Interactive sections walk through source scanning, evidence capture, synthesis, and reusable research setups.
- **Collects local waitlist details.** The demo stores an entry in the current browser's `localStorage`; it does not submit the entry to a server.

These describe the interface and intended workflow shown in the prototype, not guarantees of production document-processing functionality.

## Project status

Margen is an experiment built with Gemini 4 Carbon. The current repository is a frontend prototype intended to communicate a possible research workflow and product direction. Backend ingestion, document parsing, shared workspaces, authentication, and a server-backed waitlist are not implemented here.

## Run locally

### Requirements

- Node.js compatible with the installed Vite version
- npm

### Setup

```bash
git clone https://github.com/atharhive/Margen.git
cd Margen
npm install
npm run dev
```

Vite prints the local development URL after startup. The `dev` script binds to `0.0.0.0` on port `3000` by default.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000. |
| `npm run build` | Build the production frontend into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run TypeScript checking with `tsc --noEmit`. |
| `npm run clean` | Remove generated `dist/` and `server.js` files. |

## Configuration and privacy

- `.env.example` documents `GEMINI_API_KEY` and `APP_URL` for a possible AI Studio deployment. The current frontend source does not make Gemini API calls, so these values are not needed to run the local prototype.
- Never commit real credentials. The repository's `.gitignore` excludes `.env` files while allowing `.env.example`.
- Waitlist entries are stored only in the browser's local storage. Clearing site data removes them; they are not sent to Margen or collected centrally.

## Technology

React 19 · TypeScript · Vite · Tailwind CSS 4 · Motion · Lucide

## License

The source files declare the Apache-2.0 license. A separate `LICENSE` file is not currently included; add one before relying on this project as a formally licensed distribution.
