# Wannadev Portfolio

Personal portfolio website built with Vite + TypeScript, deployed automatically to GitHub Pages on every push to `main`.

## Tech Stack

- TypeScript
- Vite
- GitHub Actions (Pages deploy)
- GitHub Pages + custom domain (`wannadev.id.vn`)

## Project Structure

```text
.
├── index.html
├── src/
│   ├── main.ts
│   └── styles.css
├── public/
│   └── profile-placeholder.svg
├── .github/workflows/
│   └── deploy-pages.yml
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview built site locally:

```bash
npm run preview
```

## Deployment (Auto)

This repo includes workflow: `.github/workflows/deploy-pages.yml`

Trigger:
- Push to `main`
- Manual run from Actions tab

Deploy flow:
1. Checkout code
2. Setup Node
3. `npm ci`
4. `npm run build`
5. Upload `dist`
6. Deploy to GitHub Pages

## GitHub Pages Requirements

In GitHub repo settings:

- **Pages → Build and deployment → Source = GitHub Actions**

Do not use "Deploy from branch" for this setup.

## Custom Domain Notes

For `wannadev.id.vn` via Cloudflare:

- Point DNS to GitHub Pages correctly
- Keep domain configured in GitHub Pages settings
- If updates do not show, purge Cloudflare cache and hard refresh browser

## Common Issue

### `Failed to load module script ... MIME type "video/mp2t"`

Cause:
- The live HTML is referencing `/src/main.ts` (source file) instead of built JS assets.

Fix:
- Ensure Pages deploy uses GitHub Actions workflow output (`dist`)
- Ensure latest commit is pushed and workflow succeeds
- Confirm live HTML points to `./assets/...` or `/assets/...`, not `/src/main.ts`

## Update Content

Main profile content lives in:

- `src/main.ts` (name, headline, about, experience, education, skills)
- `src/styles.css` (visual design)

Replace placeholders with your real profile data and push to `main` to publish.