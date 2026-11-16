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
