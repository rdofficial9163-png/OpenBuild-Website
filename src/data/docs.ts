export interface DocArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  body: string[];
  code?: string;
}

export const DOC_ARTICLES: DocArticle[] = [
  {
    id: 'introduction',
    title: 'Introduction to OpenBuild IDE',
    summary:
      'What OpenBuild IDE is, its mobile-first focus, and how source code and APK releases are distributed.',
    category: 'Getting Started',
    body: [
      'OpenBuild IDE is an open-source Android development environment built for creating and compiling Android projects directly on an Android phone or tablet.',
      'Official source code and APK releases are hosted on GitHub. Always verify you are downloading from the official rdofficial9163-png/Openbuild-IdeBUILD repository.',
    ],
  },
  {
    id: 'install',
    title: 'Download and Installation',
    summary:
      'How to download the v0.1.0 APK from GitHub Releases and allow installation on Android.',
    category: 'Getting Started',
    body: [
      'Download app-release.apk directly from the official GitHub Release link on the Download page.',
      'Because OpenBuild IDE is distributed via GitHub Releases rather than Google Play, Android will ask you to permit installing unknown apps from your browser or file manager.',
    ],
  },
  {
    id: 'project-structure',
    title: 'Understanding Android Project Structure',
    summary:
      'Standard layout of manifests, Java sources, XML resources, and Gradle scripts.',
    category: 'Projects',
    body: [
      'An Android project separates app configuration (build.gradle, AndroidManifest.xml) from Java source code under src/main/java and UI/string resources under src/main/res.',
    ],
    code: `app/
├── build.gradle
└── src/main/
    ├── AndroidManifest.xml
    ├── java/com/example/app/MainActivity.java
    └── res/layout/activity_main.xml`,
  },
  {
    id: 'toolchain-setup',
    title: 'Configuring JDK, Gradle, and Android SDK',
    summary:
      'Preparing the on-device build environment and verifying storage permissions.',
    category: 'Toolchain',
    body: [
      'Local Android builds require a compatible JDK, Gradle distribution, and Android SDK / Build Tools for your device architecture (such as ARM64).',
      'Ensure sufficient free internal storage before extracting toolchains or downloading dependencies.',
    ],
  },
  {
    id: 'build-outputs',
    title: 'Building a Debug APK & Finding Outputs',
    summary:
      'Running Gradle tasks and locating your generated APK artifact.',
    category: 'Building',
    body: [
      'Trigger a debug build from your project workspace and monitor the live Gradle build log for warnings or dependency errors.',
      'Standard Gradle debug outputs are written inside the module build directory.',
    ],
    code: 'app/build/outputs/apk/debug/app-debug.apk',
  },
  {
    id: 'troubleshooting',
    title: 'Common Build & Storage Troubleshooting',
    summary:
      'Resolving low memory, incomplete dependency downloads, or permission errors.',
    category: 'Troubleshooting',
    body: [
      'If a Gradle sync fails midway, check network stability and available device storage, then re-run the build.',
      'Report reproducible bugs with your device model, Android version, and build log on GitHub Issues.',
    ],
  },
];