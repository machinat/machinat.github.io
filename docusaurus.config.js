module.exports = {
  title: 'Machinat',
  tagline: 'Build Next-Gen Chat App on ALL Conversational Platforms',
  url: 'https://machinat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'machinat',
  projectName: 'machinat',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/nav-logo.svg',
        srcDark: 'img/nav-logo-dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/machinat/machinat',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/machinat',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/machinat',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/machinat',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/machinat/machinat',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Machinat LLC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/machinat/machinat/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/machinat/machinat/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
