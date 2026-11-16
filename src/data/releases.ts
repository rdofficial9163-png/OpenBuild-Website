export interface ReleaseEntry {
  version: string;
  apkUrl: string;
  releasePageUrl: string;
  releaseDate: string | null;
  apkSize: string | null;
  sha256: string | null;
  minAndroid: string | null;
  distributionNote: string;
  notesSummary: string;
  added: string[];
  improvements: string[];
  fixes: string[];
  knownIssues: string[];
}

export const CURRENT_RELEASE: ReleaseEntry = {
  version: 'v0.1.0',
  apkUrl:
    'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD/releases/download/v0.1.0/app-release.apk',
  releasePageUrl:
    'https://github.com/rdofficial9163-png/Openbuild-IdeBUILD/releases',
  releaseDate: null, // Populate only with verified release date
  apkSize: null, // Populate only with verified APK byte/MB size
  sha256: null, // Populate only with verified SHA-256 hash
  minAndroid: null, // Populate only when minSdk is confirmed
  distributionNote:
    'Distributed officially as an Android APK via GitHub Releases. Not listed on Google Play.',
  notesSummary:
    'Initial public release v0.1.0 published on GitHub Releases. Inspect the repository release page for full asset details.',
  added: [],
  improvements: [],
  fixes: [],
  knownIssues: [
    'See the GitHub Releases page and issue tracker for known issues in v0.1.0.',
  ],
};

export const RELEASES: ReleaseEntry[] = [CURRENT_RELEASE];