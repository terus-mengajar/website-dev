/**
 * Reusable Schema Markup Component for JSON-LD structured data
 *
 * Usage:
 *   <SchemaMarkup schema={generateOrganization({ ... })} />
 *   <SchemaMarkup schemas={[generateLearningResource({ ... }), generateFAQPage({ ... })]} />
 *
 * Or combine with @graph:
 *   <SchemaMarkup schema={{
 *     "@context": "https://schema.org",
 *     "@graph": [generateLearningResource({ ... }), generateFAQPage({ ... })]
 *   }} />
 */

export default function SchemaMarkup({ schema, schemas }) {
  const jsonLd = schemas
    ? { "@context": "https://schema.org", "@graph": schemas }
    : schema;

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Organization Schema ───────────────────────────────────────────

export function generateOrganization({
  name = "Terus Mengajar",
  alternateName = "TM",
  url = "https://terusmengajar.id",
  logoUrl = "https://terusmengajar.id/images/og.png",
  logoWidth = 1200,
  logoHeight = 630,
  sameAs = [],
  contactType = "customer support",
  availableLanguage = "Indonesian",
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    alternateName,
    url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: logoWidth,
      height: logoHeight,
    },
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType,
      availableLanguage,
    },
  };
}

// ─── BreadcrumbList Schema ─────────────────────────────────────────

export function generateBreadcrumbList(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── LearningResource Schema ───────────────────────────────────────

export function generateLearningResource({
  name,
  description,
  image,
  url,
  authorName = "Terus Mengajar",
  authorUrl = "https://terusmengajar.id",
  publisherName = "Terus Mengajar",
  publisherUrl = "https://terusmengajar.id",
  educationalLevel = "TK / PAUD",
  educationalUse = "Practice",
  learningResourceType = "Worksheet",
  inLanguage = "Indonesian",
  isAccessibleForFree = true,
  datePublished,
  dateModified,
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name,
    description,
    image,
    author: {
      "@type": "Organization",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
    },
    educationalLevel,
    educationalUse,
    learningResourceType,
    inLanguage,
    isAccessibleForFree,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    url,
  };
}

// ─── FAQPage Schema ────────────────────────────────────────────────

export function generateFAQPage(questions = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// ─── HowTo Schema ──────────────────────────────────────────────────

export function generateHowTo({
  name,
  description,
  image,
  totalTime = "PT15M",
  estimatedCostValue = "0",
  estimatedCostCurrency = "IDR",
  supply = [],
  tool = [],
  steps = [],
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image,
    totalTime,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: estimatedCostCurrency,
      value: estimatedCostValue,
    },
    supply: supply.map((s) => ({
      "@type": "HowToSupply",
      name: s,
    })),
    tool: tool.map((t) => ({
      "@type": "HowToTool",
      name: t,
    })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}

// ─── BlogPosting Schema ────────────────────────────────────────────

export function generateBlogPosting({
  headline,
  description,
  image,
  url,
  authorName = "Terus Mengajar",
  authorUrl = "https://terusmengajar.id",
  publisherName = "Terus Mengajar",
  publisherUrl = "https://terusmengajar.id",
  datePublished,
  dateModified,
  articleBody,
  keywords = [],
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    author: {
      "@type": "Organization",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(articleBody ? { articleBody } : {}),
    ...(keywords.length ? { keywords: keywords.join(", ") } : {}),
  };
}
