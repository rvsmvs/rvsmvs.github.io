(function() {
  function $(selector, root) { return (root || document).querySelector(selector); }
  function $all(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  const nav = document.getElementById('site-nav');
  const navToggle = document.getElementById('nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Search
  const searchInput = document.getElementById('site-search');
  const searchResults = document.getElementById('search-results');
  if (searchInput && searchResults && window.SEARCH_INDEX) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchResults.innerHTML = ''; return; }
      const results = window.SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(q) ||
        (item.keywords && item.keywords.join(' ').toLowerCase().includes(q))
      ).slice(0, 8);
      searchResults.innerHTML = results.map(r => `<div><a href="${r.url}">${r.title}</a></div>`).join('');
    });
  }

  // Latest posts
  const latestPostsList = document.getElementById('latest-posts');
  if (latestPostsList && window.SEARCH_INDEX) {
    const posts = window.SEARCH_INDEX.filter(i => i.url.startsWith('./posts/')).slice(0, 5);
    if (posts.length) {
      latestPostsList.innerHTML = posts.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('');
    }
  }

  // Table of contents generation
  const tocEl = document.getElementById('toc');
  const mainEl = document.getElementById('main-content');
  if (tocEl && mainEl) {
    const headings = $all('h2, h3', mainEl).filter(h => h.id);
    const tocHtml = headings.map(h => {
      const level = h.tagName === 'H2' ? 2 : 3;
      return `<div style="margin-left:${level === 3 ? '1rem' : '0'}"><a href="#${h.id}">${h.textContent}</a></div>`;
    }).join('');
    tocEl.innerHTML = tocHtml;

    // Scroll spy
    const headingMap = headings.map(h => ({ id: h.id, top: h.offsetTop }));
    function onScroll() {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      let activeId = headingMap[0]?.id;
      for (const h of headingMap) {
        if (scrollPos + 100 >= h.top) activeId = h.id;
      }
      $all('#toc a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mermaid + Highlight.js init
  document.addEventListener('DOMContentLoaded', () => {
    if (window.mermaid) {
      window.mermaid.initialize({ startOnLoad: true, theme: 'default', securityLevel: 'strict' });
    }
    if (window.hljs) {
      document.querySelectorAll('pre code').forEach((el) => {
        window.hljs.highlightElement(el);
      });
    }
  });
})();
