export type FeatureStatus = 'Available' | 'In development' | 'Planned';

export interface FeatureItem {
  title: string;
  description: string;
  status: FeatureStatus;
  category:
    | 'Project Development'
    | 'Code Editing'
    | 'Build System'
    | 'Toolchain Management'
    | 'Advanced Tools';
  docHref?: string;
}

export const FEATURES: FeatureItem[] = [
  {
    title: 'Android Project Management',
    description:
      'Create, open, and organize Android projects and source/resource files directly on your device.',
    status: 'Available',
    category: 'Project Development',
    docHref: '/documentation#project-structure',
  },
  {
    title: 'Java & XML Editing',
    description:
      'Edit Java source files and Android XML layouts/manifests in a mobile-adapted code workspace.',
    status: 'Available',
    category: 'Code Editing',
    docHref: '/guides/java-android-development',
  },
  {
    title: 'Local Gradle Execution',
    description:
      'Run Gradle builds locally on your Android device without relying on external cloud build servers.',
    status: 'Available',
    category: 'Build System',
    docHref: '/guides/build-apk-on-android',
  },
  {
    title: 'ARM64 Build Environment',
    description:
      'Build pipeline oriented around ARM64 Android devices and on-device compilation workflows.',
    status: 'Available',
    category: 'Build System',
    docHref: '/guides/arm64-android-builds',
  },
  {
    title: 'APK Output & Build Logs',
    description:
      'Inspect build output logs and access generated APK artifacts directly from your workspace.',
    status: 'Available',
    category: 'Build System',
    docHref: '/documentation#build-outputs',
  },
  {
    title: 'Toolchain Configuration (JDK, Gradle, Android SDK)',
    description:
      'Configure and validate JDK, Gradle, and Android SDK / Build Tools required for local builds.',
    status: 'Available',
    category: 'Toolchain Management',
    docHref: '/documentation#toolchain-setup',
  },
  {
    title: 'Kotlin Support',
    description:
      'First-class Kotlin editing and compilation support on mobile devices.',
    status: 'Planned',
    category: 'Code Editing',
  },
  {
    title: 'APK Signing Manager',
    description:
      'Dedicated keystore generation and release APK signing management.',
    status: 'Planned',
    category: 'Advanced Tools',
  },
  {
    title: 'Integrated Terminal & Git',
    description:
      'Built-in shell access and repository management workflows.',
    status: 'Planned',
    category: 'Advanced Tools',
  },
  {
    title: 'Decompiler Studio, Debugger & Extensions',
    description:
      'Inspect compiled artifacts, step-debug applications, and extend editor capabilities.',
    status: 'Planned',
    category: 'Advanced Tools',
  },
];