/**
 * Scroll-reveal observer, inlined before hydration.
 *
 * The `js-reveal` class is added to <html> by this script, and only then do
 * `.reveal` elements start hidden — so a visitor without JavaScript (or one
 * who hits a hydration error) still sees fully rendered content rather than
 * a blank page.
 */
const SCRIPT = `
(function () {
  var d = document;
  if (!('IntersectionObserver' in window)) return;
  d.documentElement.classList.add('js-reveal');

  function start() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    function scan() {
      d.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
        io.observe(el);
      });
    }
    scan();
    // Re-scan after client-side navigation swaps the page content.
    new MutationObserver(scan).observe(d.body, { childList: true, subtree: true });
  }

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
`;

export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
