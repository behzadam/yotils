/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const packageName = 'yotils';

function filterSidebarItems(items) {
  const filtered = ['index', packageName];
  const result = items.map((item) => {
    if (!filtered.includes(item.id)) {
      const newName = item.id.replace('yotils.', '');
      return {
        type: 'doc',
        id: newName,
      };
    }
  });
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yotils',
  tagline: 'Typescript utility belt',
  url: 'https://behzadam.github.io/',
  baseUrl: '/yotils/',
  organizationName: 'behzadam',
  trailingSlash: false,
  projectName: 'yotils',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: '../docs',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return filterSidebarItems(sidebarItems);
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Yotils',
        logo: {
          alt: 'Yotils Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Behzad Ali Mohammad Zad`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
