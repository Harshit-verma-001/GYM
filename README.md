# FiTusion — Fitness Website Portfolio Demo

A responsive React + Vite + TypeScript fitness website concept featuring interactive navigation, animations, a contact-form preview, and a simulated membership flow.

**Important:** This is a fictional portfolio demo, not a real gym. Contact details, locations, membership prices, and enrollment flows are illustrative. Forms do not transmit or store user information, and no payment is collected.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Set framework to **Vite**, build command to `npm run build`, and output directory to `dist`.
3. No environment variables are needed.
4. Deploy and test direct visits to `/about`, `/contact`, and `/get-started` (SPA rewrites are provided in `vercel.json`).

## Before adapting for a real client

Replace all fictional gym contact information, claims, prices, and location references with verified business details. Connect forms to a secure backend or approved form provider with validation, spam protection, privacy disclosures, and real delivery confirmation. Do not collect health or biometric data without appropriate protections and consent.

## Security

Do not add secret API keys to client-side Vite environment variables or `define` options.
