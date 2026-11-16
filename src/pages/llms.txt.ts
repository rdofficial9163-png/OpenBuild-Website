import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/site';
import { CURRENT_RELEASE } from '../data/releases';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || '';
  const body = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.tagline} ${SITE_CONFIG.description}

## Authoritative Pages
- Homepage: ${origin}/
- Product Facts: ${origin}/about-openbuild
- Download (${CURRENT_RELEASE.version}): ${origin}/download
- Features: ${origin}/features
- Documentation: ${origin}/documentation
- Changelog: ${origin}/changelog
- Android IDE Guide: ${origin}/android-ide
- Privacy & Terms: ${origin}/privacy | ${origin}/terms

## Canonical Source & APK Distribution
- GitHub Repository: ${SITE_CONFIG.github.repo}
- GitHub Releases: ${SITE_CONFIG.github.releases}
- APK (${CURRENT_RELEASE.version}): ${CURRENT_RELEASE.apkUrl}
- Issue Tracker: ${SITE_CONFIG.github.issues}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};