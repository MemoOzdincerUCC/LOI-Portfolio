// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "LOI@UCC";
export const SITE_DESCRIPTION =
    "A portoflio of projects and initatives led by the League of Innovators club at Upper Canada College";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "GABE Memo Ozdincer & Aarav Dogra";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
