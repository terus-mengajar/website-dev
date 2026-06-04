import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://terusmengajar.id'

  return {
    rules: [
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: 'BrightBot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/profil/',
          '/credit-attribution/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
