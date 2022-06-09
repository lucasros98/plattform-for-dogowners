const siteMetadata = {
  title: 'En plattform för nya hundägare',
  author: 'Lucas Rosvall',
  headerTitle: 'En plattform för nya hundägare',
  description: 'En plattform som hjälper nya hundägare med sin valp. Lär dig om hundar och följ din hunds utveckling.',
  language: 'se-SE',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lucasrosvall.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  email: 'lucasrosvall@gmail.com',
  github: 'https://github.com/lucasros98',
  locale: 'se-SE',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
}

module.exports = siteMetadata
