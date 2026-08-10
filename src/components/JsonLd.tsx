/**
 * Emits a JSON-LD block. Kept as a component so every page declares its
 * structured data next to its content rather than in a central registry
 * that drifts out of sync.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is built from local, non-user data; escaping `<`
      // prevents a stray sequence from closing the script element early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
