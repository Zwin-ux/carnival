export const carnivalTheme = {
  chrome: {
    100: "#f0f1f3",
    200: "#d8dbe0",
    300: "#b8bec7",
    400: "#919ba8",
    500: "#6d7a8a",
    600: "#556170",
    700: "#3f4a56",
    800: "#2b333c",
    900: "#1a2026",
  },
  brass: {
    100: "#fff8e6",
    200: "#ffecb3",
    300: "#ffdf80",
    400: "#ffd24d",
    500: "#ffc61a",
    600: "#e6b200",
    700: "#b38f00",
    800: "#806600",
    900: "#4d3d00",
  },
  steel: {
    100: "#f2f4f6",
    200: "#dfe3e8",
    300: "#c4c9d0",
    400: "#a0a8b3",
    500: "#7d8997",
    600: "#5e6b7b",
    700: "#45505e",
    800: "#2e3842",
    900: "#1a2026",
  },
  neon: {
    pink: "#ff2a6d",
    cyan: "#05d9e8",
    purple: "#d300c5",
    yellow: "#ffd700",
  },
} as const;

export type CarnivalTheme = typeof carnivalTheme;
