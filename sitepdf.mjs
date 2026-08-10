import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "fs";

const S = "/tmp/claude-0/-home-user-paradise/26b5adb0-c897-532c-a8f1-7237b67c1297/scratchpad";
const OUT = `${S}/sitepages`;
mkdirSync(OUT, { recursive: true });

const urls = readFileSync(`${S}/urls.txt`, "utf8").split("\n").filter(Boolean);

const b = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const ctx = await b.newContext({ viewport: { width: 1280, height: 1000 } });

// Scroll-reveal hides content until it enters the viewport; printing never
// scrolls, so force everything visible and stop cards splitting across pages.
const PRINT_CSS = `
  .reveal { opacity: 1 !important; transform: none !important; }
  header.fixed { position: absolute !important; }
  section, article, figure, li { break-inside: avoid; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
`;

const done = [];
for (let i = 0; i < urls.length; i++) {
  const path = urls[i];
  const p = await ctx.newPage();
  try {
    await p.goto("http://localhost:3311" + path, {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    await p.addStyleTag({ content: PRINT_CSS });
    // Nudge lazy images into loading before we freeze the page.
    await p.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 350));
      window.scrollTo(0, 0);
    });
    await p.waitForTimeout(700);
    const file = `${OUT}/${String(i).padStart(3, "0")}.pdf`;
    await p.pdf({
      path: file,
      format: "A4",
      printBackground: true,
      margin: { top: "8mm", bottom: "8mm", left: "6mm", right: "6mm" },
      scale: 0.62,
    });
    done.push(file);
    if (i % 10 === 0) console.log(`  ${i}/${urls.length} ${path}`);
  } catch (e) {
    console.log(`  SKIP ${path}: ${e.message.slice(0, 60)}`);
  }
  await p.close();
}

await b.close();
console.log(`rendered ${done.length}/${urls.length}`);
