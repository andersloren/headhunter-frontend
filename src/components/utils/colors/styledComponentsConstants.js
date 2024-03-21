import { lighten, darken } from "./colorPalette";

const baseColor = "hsl(210, 50%, 50%)"; // Example: a shade of blue

// Generate shades
export const brightest = lighten(baseColor, 0.75); // 75% lighter
export const brighter = lighten(baseColor, 0.5); // 50% lighter
export const bright = lighten(baseColor, 0.25); // 25% lighter
export const neutral = baseColor; // Example: a shade of blue
export const dark = darken(baseColor, 0.25); // 25% darker
export const darker = darken(baseColor, 0.5); // 50% darker
export const darkest = darken(baseColor, 0.75); // 75% darker

// export const brighter = "#fff7eb";
// export const bright = "#fff0d9";
// export const neutral = "#f9d2b5";
// export const dark = "#d68f70";
// export const darker = "#c08065";
