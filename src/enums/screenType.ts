
export const SCREEN_TYPE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
} as const;

export type SCREEN_TYPE = typeof SCREEN_TYPE[keyof typeof SCREEN_TYPE];