# Contributing

Thank you for your interest in contributing to this project! The guide below will help you get a local copy up and running so you can start making changes.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Fork & clone](#fork--clone)
3. [Install dependencies](#install-dependencies)
4. [Environment variables](#environment-variables)
5. [Run the development server](#run-the-development-server)
6. [Build for production](#build-for-production)
7. [Project conventions](#project-conventions)
8. [Submitting a pull request](#submitting-a-pull-request)

---

## Prerequisites

Make sure the following tools are installed before you begin:

| Tool | Minimum version | Notes |
|------|-----------------|-------|
| [Node.js](https://nodejs.org/) | 14.x | LTS recommended |
| npm | 6.x | Comes with Node.js |
| A [Sanity.io](https://www.sanity.io/) account | — | Free tier is enough |
| A [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) | — | Enable the **Maps JavaScript API** in the Google Cloud Console |

---

## Fork & clone

```bash
# 1. Fork the repo on GitHub, then clone your fork:
git clone https://github.com/<your-username>/airbnb-sanity-frontend.git
cd airbnb-sanity-frontend

# 2. Add the upstream remote so you can pull in future changes:
git remote add upstream https://github.com/danielbryonq/airbnb-sanity-frontend.git
```

---

## Install dependencies

```bash
npm install
```

---

## Environment variables

This project needs credentials for two external services. Create a `.env.local` file in the project root (it is already git-ignored) and add the following keys:

```env
# ── Sanity ────────────────────────────────────────────────────────────────────
# Your Sanity project ID – found in sanity.io/manage or in sanity.json
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id

# The dataset to query (usually "production")
NEXT_PUBLIC_SANITY_DATASET=production

# ── Google Maps ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> **Tip:** The companion Sanity backend lives at  
> <https://github.com/danielbryonq/airbnb-sanity-backend>.  
> Follow its README to spin up Sanity Studio and populate the dataset before running this frontend.

---

## Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

---

## Build for production

```bash
# Create an optimised production build
npm run build

# Start the production server locally
npm start
```

---

## Project conventions

- **Branching** – create a feature branch from `main`:  
  `git checkout -b feat/short-description`
- **Commits** – write clear, imperative commit messages, e.g. `Add cluster-map zoom controls`.
- **Code style** – follow the existing patterns in `components/` and `pages/`. There is no enforced linter yet, so keep formatting consistent with the surrounding code.
- **Secrets** – never commit `.env.local` or any file that contains API keys.

---

## Submitting a pull request

1. Push your feature branch to your fork:  
   `git push origin feat/short-description`
2. Open a pull request against the `main` branch of this repository.
3. Fill in the PR description with:
   - **What** changed and **why**.
   - Steps to test the change locally.
   - Screenshots or screen-recordings if the UI was affected.
4. Address any review comments and push additional commits to the same branch – the PR will update automatically.

We appreciate every contribution, big or small. Happy coding! 🎉
