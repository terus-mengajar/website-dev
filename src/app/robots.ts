import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://terusmengajar.id'

  return {
    rules: [
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
