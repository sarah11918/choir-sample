module.exports = {
  siteTitle: 'Choir sample website',
  siteDescription: 'A Gatsby choir-focused website',
  authorName: 'Sarah Rainsberger',
  twitterUsername: 'sarah11918',
  authorAvatar: 'tinyAvatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Sarah Rainsberger, through every fault of her own, makes choir websites <br>
  Do you want to know more? <a href="https://www.rainsberger.ca/about" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'A sample choir website',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
          rel: 'external',
        },
      ],
    },
  ],
}
