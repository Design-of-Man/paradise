import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

/**
 * Crawl policy.
 *
 * A crawler obeys only the most specific user-agent group that matches it, and
 * ignores every other group — including the wildcard. So each named agent has
 * to repeat the `/api/` exclusion rather than inheriting it, which is why the
 * rules are generated rather than written out by hand.
 *
 * Everything here is permissive on purpose. Retail tenants and landowners
 * increasingly arrive through answer engines rather than a blue-link search, so
 * being absent from a model's index is the same as being absent from the market.
 */

/**
 * Named agents split into what they actually do, because the distinction
 * decides whether blocking one costs you traffic or only training data.
 */
const ANSWER_ENGINES = [
  // OpenAI: GPTBot trains, OAI-SearchBot builds the ChatGPT Search index, and
  // ChatGPT-User fetches a page because someone asked for it in a conversation.
  // Blocking the last two removes the firm from ChatGPT results entirely.
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic: crawl, search index, and user-initiated fetch. `anthropic-ai`
  // is the older identifier and is still checked by some tooling, so it is
  // named rather than left to the wildcard.
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  // Google's AI surfaces. Google-Extended does not affect ordinary Search
  // ranking — it governs Gemini and AI Overviews grounding.
  "Google-Extended",
  // Apple Intelligence and Siri.
  "Applebot",
  "Applebot-Extended",
  // Perplexity: index plus user-initiated fetch.
  "PerplexityBot",
  "Perplexity-User",
  // The rest of the field.
  "DuckAssistBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "YouBot",
];

/** Conventional search crawlers named explicitly so their limits are visible. */
const SEARCH_ENGINES = ["Googlebot", "Googlebot-Image", "Bingbot", "Slurp", "DuckDuckBot"];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...SEARCH_ENGINES.map((userAgent) => ({ userAgent, allow: "/", disallow })),
      ...ANSWER_ENGINES.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
