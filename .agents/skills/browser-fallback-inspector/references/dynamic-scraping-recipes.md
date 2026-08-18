# Dynamic Scraping Recipes

Use these JavaScript snippets inside `evaluate_script` to extract high-value content from complex websites.

---

## 1. Extract Complete Article / Markdown Text
```javascript
() => {
  // Remove clutter
  const clutters = document.querySelectorAll('script, style, noscript, nav, footer, iframe, header');
  clutters.forEach(el => el.remove());

  const title = document.querySelector('h1')?.innerText || document.title;
  const contentEl = document.querySelector('article, main, .content, #content, .post') || document.body;

  const paragraphs = Array.from(contentEl.querySelectorAll('h1, h2, h3, h4, p, li, blockquote, pre'))
    .map(el => {
      const tag = el.tagName.toLowerCase();
      const text = el.innerText.trim();
      if (!text) return null;
      if (tag.startsWith('h')) return `\n\n${'#'.repeat(parseInt(tag[1]))} ${text}\n`;
      if (tag === 'li') return `- ${text}`;
      if (tag === 'blockquote') return `> ${text}`;
      if (tag === 'pre') return `\`\`\`\n${text}\n\`\`\``;
      return `\n${text}\n`;
    })
    .filter(Boolean)
    .join('\n');

  return { title, content: paragraphs };
}
```

---

## 2. Extract Card Grid / Showcase Items (Inspora, SupaHero, etc.)
```javascript
() => {
  const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="item"], article, section > div > div'));
  return cards.slice(0, 20).map(card => {
    const title = card.querySelector('h2, h3, h4, [class*="title"]')?.innerText?.trim() || '';
    const desc = card.querySelector('p, [class*="desc"]')?.innerText?.trim() || '';
    const link = card.querySelector('a')?.href || '';
    const img = card.querySelector('img')?.src || '';
    return { title, desc, link, img };
  }).filter(c => c.title || c.desc);
}
```

---

## 3. Extract Design System Tokens (Fonts, Colors, Spacing)
```javascript
() => {
  const styles = window.getComputedStyle(document.body);
  const rootStyles = window.getComputedStyle(document.documentElement);

  // Extract CSS variables
  const cssVars = {};
  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        if (rule.selectorText === ':root' || rule.selectorText === 'html' || rule.selectorText === 'body') {
          for (let i = 0; i < rule.style.length; i++) {
            const prop = rule.style[i];
            if (prop.startsWith('--')) {
              cssVars[prop] = rule.style.getPropertyValue(prop).trim();
            }
          }
        }
      }
    } catch (e) {
      // Cross-origin stylesheet security handling
    }
  }

  return {
    bodyFont: styles.fontFamily,
    backgroundColor: styles.backgroundColor,
    textColor: styles.color,
    rootVariables: cssVars
  };
}
```

---

## 4. Scroll Page to Trigger Lazy-Loaded Elements
```javascript
async () => {
  let totalHeight = 0;
  const distance = 300;
  while (totalHeight < 2000) {
    window.scrollBy(0, distance);
    totalHeight += distance;
    await new Promise(r => setTimeout(r, 150));
  }
  window.scrollTo(0, 0);
  return { scrolledHeight: totalHeight, finalItemCount: document.querySelectorAll('img, article, [class*="item"]').length };
}
```
