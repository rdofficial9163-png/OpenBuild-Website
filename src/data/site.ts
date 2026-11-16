export const SITE_CONFIG = {
  name: 'OpenBuild IDE',
  tagline: 'Build Android Apps on Your Phone.',
  description:
    'OpenBuild IDE is a mobile-first Android development environment designed to let you create, edit, and build Android applications directly on your Android device.',
  creatorCredit: 'Made with love by Not rik.',
  // Replace with your hosted 1200x630 banner URL when ready, or set PUBLIC_SOCIAL_SHARE_IMAGE_URL on Netlify.
  SOCIAL_SHARE_IMAGE_URL:
    import.meta.env.PUBLIC_SOCIAL_SHARE_IMAGE_URL ||
    '/assets/openbuild-social-banner.png',
  github: {
    repo: 'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD',
    releases: 'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD/releases',
    issues: 'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD/issues',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Documentation', href: '/documentation' },
    { label: 'Changelog', href: '/changelog' },
    {
      label: 'GitHub',
      href: 'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD',
      external: true,
    },
  ],
} as const;