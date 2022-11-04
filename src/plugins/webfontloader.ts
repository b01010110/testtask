/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader')

  webFontLoader.load({
    google: {
      families: [
        'Fira Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700',
        'Roboto:100,300,400,500,700,900&display=swap',
      ],
    },
  })
}
