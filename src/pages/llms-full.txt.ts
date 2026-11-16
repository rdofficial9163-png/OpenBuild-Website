import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/site';
import { CURRENT_RELEASE } from '../data/releases';
import { FEATURES } from '../data/features';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || '';
  const featureLines = FEATURES.map(
    (f) => `- [${f.status}] ${f.title}: ${f.description}`
  ).join('\n');

  const body = `# ${SITE_CONFIG.name} — Extended Reference

Site URL: ${origin}
Platform: Android
Category: DeveloperApplication (Mobile Android IDE)
Current Known Release: ${CURRENT_RELEASE.version}
APK Download URL: ${CURRENT_RELEASE.apkUrl}
Source Repository: ${SITE_CONFIG.github.repo}
Distribution: GitHub Releases (not Google Play)

## Capabilities & Roadmap Status
${featureLines}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};