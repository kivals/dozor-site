import localFont from "next/font/local";

export const involve = localFont({
  variable: "--font-involve",
  display: "swap",
  src: [
    { path: "./Involve-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Involve-Oblique.woff2", weight: "400", style: "italic" },
    { path: "./Involve-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Involve-MediumOblique.woff2", weight: "500", style: "italic" },
    { path: "./Involve-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./Involve-SemiBoldOblique.woff2", weight: "600", style: "italic" },
  ],
});
