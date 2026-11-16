# OpenBuild IDE — Official Website

This is the complete Astro website project, structured for deployment to Netlify. The website branding is **OpenBuild IDE**; Netlify is only the hosting provider.

## Included

- Astro 5 static site with responsive pages, documentation, guides, legal pages, and 404/offline pages
- SEO metadata, canonical URLs, Open Graph/Twitter cards, JSON-LD, sitemap, `robots.txt`, `llms.txt`, and `llms-full.txt`
- PWA manifest and service worker
- OpenBuild PNG/SVG logos and source Android vector XML files
- Social banner at `public/assets/openbuild-social-banner.png` (1200×630)
- Netlify build configuration

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Build and preview: 

```bash
npm run build
npm run preview
```

## Deploy to Netlify

1. Push this project to a Git repository.
2. Import the repository in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Set `PUBLIC_SITE_URL` to the final canonical domain (for example, `https://openbuild.example`).
6. Deploy.

`netlify.toml` already contains the build command, publish directory, and Node.js version.

## Social banner and logo assets

- Social/Open Graph banner: `/assets/openbuild-social-banner.png`
- App/site logo: `/assets/openbuild-logo.png` and `/assets/openbuild-logo.svg`
- Android vector source: `/assets/source/ic_launcher_foreground.xml` and `ic_launcher_background.xml`

The social banner is used by the SEO layout as the default Open Graph and Twitter image. If you later host it at a separate absolute URL, set `PUBLIC_SOCIAL_SHARE_IMAGE_URL`.

## Before launch

- Replace the example canonical site URL with your real domain.
- Review product feature status, legal copy, privacy statements, and release details.
- Confirm all public claims match the current app release.
- Submit the sitemap (`/sitemap-index.xml`) in Google Search Console after deployment.
- Verify the generated social preview with the social platforms' link preview tools.

## Project structure

See `PROJECT_STRUCTURE.md` for the complete file tree.
