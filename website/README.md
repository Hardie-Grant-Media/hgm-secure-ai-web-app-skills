# HGM workflow website

This folder contains the plain-language GitHub Pages website for the HGM Secure AI Web-App Skill Pack.

## Run locally

```sh
npm ci
npm run dev
```

## Publish with GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push a change under `website/`, or run **Deploy workflow website to GitHub Pages** from the Actions tab.

The workflow builds this folder and publishes `website/dist`. Vite calculates the project-page base path from the GitHub repository name, and TanStack Router uses the same base path for the single page.

The page links to the master skill ZIP. The deployment workflow rebuilds all skill packages from `skills/` before publishing.
