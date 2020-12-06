# Next.js i18n (Format.JS) starter for static pages

Includes `react-intl` (Format.JS), `get-user-locale` and `tailwindcss`.

Clients will be directly redirected from `/` to `/[lang]` based on the detected language.

The magic is done in `/src/pages/_app.js`.

## Note

Polyfill for Format.JS is not implemented in this starter, but it is possible: https://formatjs.io/docs/polyfills/

## Installation

Clone the repository and then run `npm run install`

## Configuration

-   Set the languages and the default language `/src/i18n/config.js`
-   Locales are located in `/src/locales/`

## Exoport Static Pages

`npm run export`
