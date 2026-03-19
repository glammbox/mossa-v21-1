/**
 * Test scenarios for Mossa v3 UI — used for QA, Storybook, and visual regression.
 */

export interface TestScenario {
  id: string;
  description: string;
  route: string;
  locale: "fr" | "en";
  viewports: Array<{ width: number; height: number; label: string }>;
}

export const TEST_SCENARIOS: TestScenario[] = [
  {
    id: "homepage-fr-desktop",
    description: "Page d'accueil en français — bureau",
    route: "/",
    locale: "fr",
    viewports: [{ width: 1440, height: 900, label: "desktop" }],
  },
  {
    id: "homepage-fr-mobile",
    description: "Page d'accueil en français — mobile",
    route: "/",
    locale: "fr",
    viewports: [{ width: 390, height: 844, label: "mobile" }],
  },
  {
    id: "homepage-en-desktop",
    description: "Homepage in English — desktop",
    route: "/",
    locale: "en",
    viewports: [{ width: 1440, height: 900, label: "desktop" }],
  },
  {
    id: "collection-fr-desktop",
    description: "Page collection en français — bureau",
    route: "/collection",
    locale: "fr",
    viewports: [{ width: 1440, height: 900, label: "desktop" }],
  },
  {
    id: "collection-fr-mobile",
    description: "Page collection en français — mobile",
    route: "/collection",
    locale: "fr",
    viewports: [{ width: 390, height: 844, label: "mobile" }],
  },
  {
    id: "sur-mesure-fr-desktop",
    description: "Page sur mesure en français — bureau",
    route: "/sur-mesure",
    locale: "fr",
    viewports: [{ width: 1440, height: 900, label: "desktop" }],
  },
  {
    id: "a-propos-fr-desktop",
    description: "Page à propos en français — bureau",
    route: "/a-propos",
    locale: "fr",
    viewports: [{ width: 1440, height: 900, label: "desktop" }],
  },
];
