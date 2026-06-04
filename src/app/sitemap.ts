import { MetadataRoute } from 'next'
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from '@/lib/cloudflare'
import { FUNPAPER_SINGLE_PAGE, FUNPAPER_TEMA_BUNDLE } from '@/lib/funpaper_type'

const BASE_URL = 'https://terusmengajar.id'

// Helper to fetch data from Cloudflare D1
async function fetchFromD1(sql: string, params: unknown[] = []) {
  try {
    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: 'POST',
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql, params }),
    })
    const data = await res.json()
    return data?.result?.[0]?.results ?? []
  } catch (error) {
    console.error('Failed to fetch from D1:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/funpaper-harian`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/funpaper-tema`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/funpaper-calistung`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calistung`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/funpaper-coding`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/funpaper-interaktif`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mini-game`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kataba-ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/galeri-produk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/cari-produk`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/aset-media-pembelajaran`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Fetch dynamic Funpaper Harian slugs
  const funpaperHarianSql = `
    SELECT slug, updated_at, image_url, name
    FROM funpaper
    WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
    AND slug IS NOT NULL
    ORDER BY downloaded DESC
    LIMIT 500
  `
  const funpaperHarianItems = await fetchFromD1(funpaperHarianSql)
  const funpaperHarianPages: MetadataRoute.Sitemap = funpaperHarianItems.map((item: { slug: string; updated_at?: string; image_url?: string; name?: string }) => ({
    url: `${BASE_URL}/funpaper-harian/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
    images: item.image_url ? [item.image_url] : undefined,
  }))

  // Fetch dynamic Funpaper Tema slugs
  const funpaperTemaSql = `
    SELECT slug, updated_at, mockup_url as image_url, name_on_website as name
    FROM funpaper_bundle
    WHERE funpaper_type_id = ${FUNPAPER_TEMA_BUNDLE}
    AND slug IS NOT NULL
    ORDER BY name_on_website ASC
    LIMIT 500
  `
  const funpaperTemaItems = await fetchFromD1(funpaperTemaSql)
  const funpaperTemaPages: MetadataRoute.Sitemap = funpaperTemaItems.map((item: { slug: string; updated_at?: string; image_url?: string; name?: string }) => ({
    url: `${BASE_URL}/funpaper-tema/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
    images: item.image_url ? [item.image_url] : undefined,
  }))

  // Fetch dynamic Funpaper Calistung slugs
  const funpaperCalistungSql = `
    SELECT slug, updated_at, image_url, name
    FROM funpaper_calistung
    WHERE slug IS NOT NULL
    ORDER BY downloaded DESC
    LIMIT 500
  `
  const funpaperCalistungItems = await fetchFromD1(funpaperCalistungSql)
  const funpaperCalistungPages: MetadataRoute.Sitemap = funpaperCalistungItems.map((item: { slug: string; updated_at?: string; image_url?: string; name?: string }) => ({
    url: `${BASE_URL}/funpaper-calistung/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
    images: item.image_url ? [item.image_url] : undefined,
  }))

  // Fetch dynamic Funpaper Coding slugs
  const funpaperCodingSql = `
    SELECT slug, updated_at, image_url, name
    FROM funpaper_coding
    WHERE slug IS NOT NULL
    ORDER BY downloaded DESC
    LIMIT 500
  `
  const funpaperCodingItems = await fetchFromD1(funpaperCodingSql)
  const funpaperCodingPages: MetadataRoute.Sitemap = funpaperCodingItems.map((item: { slug: string; updated_at?: string; image_url?: string; name?: string }) => ({
    url: `${BASE_URL}/funpaper-coding/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
    images: item.image_url ? [item.image_url] : undefined,
  }))

  // Fetch dynamic Mini Game slugs
  const miniGameSql = `
    SELECT slug, updated_at, image_url, name
    FROM mini_game
    WHERE slug IS NOT NULL
    ORDER BY played DESC
    LIMIT 200
  `
  const miniGameItems = await fetchFromD1(miniGameSql)
  const miniGamePages: MetadataRoute.Sitemap = miniGameItems.map((item: { slug: string; updated_at?: string; image_url?: string; name?: string }) => ({
    url: `${BASE_URL}/mini-game/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
    images: item.image_url ? [item.image_url] : undefined,
  }))

  // Fetch dynamic Aset Media Pembelajaran slugs
  const asetMediaSql = `
    SELECT slug, updated_at
    FROM aset_media_pembelajaran
    WHERE slug IS NOT NULL
    ORDER BY id DESC
    LIMIT 200
  `
  const asetMediaItems = await fetchFromD1(asetMediaSql)
  const asetMediaPages: MetadataRoute.Sitemap = asetMediaItems.map((item: { slug: string; updated_at?: string }) => ({
    url: `${BASE_URL}/aset-media-pembelajaran/${item.slug}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...funpaperHarianPages,
    ...funpaperTemaPages,
    ...funpaperCalistungPages,
    ...funpaperCodingPages,
    ...miniGamePages,
    ...asetMediaPages,
  ]
}
