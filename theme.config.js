export default {
  github: 'https://github.com/Ibex-CRM/Ibex-docs',
  docsRepositoryBase: 'https://github.com/Ibex-CRM/Ibex-docs/blob/master',
  titleSuffix: ' – Goat Dev Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Goat Dev Docs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      The Goat Agency's Dev Documentation
      </span>
    </>
  ),
  head: (
    <>
      <title>Goat Dev Docs</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Goat Dev Docs: The Goat Agency's Dev Documentation" />
      <meta name="og:description" content="Goat Dev Docs: The Goat Agency's Dev Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png" />
      <meta name="og:title" content="Goat Dev Docs: The Goat Agency's Dev Documentation" />
      <meta name="og:image" content="https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png" />
      <meta name="apple-mobile-web-app-title" content="Cabra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Goat Dev Docs.</>,
  unstable_faviconGlyph: '🐐',
}
