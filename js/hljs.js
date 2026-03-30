(function () {
  var CDN = "../vendor/hljs/";
  var LANGUAGES = [
    "languages/latex.min.js",
    "languages/dockerfile.min.js",
    "languages/ini.min.js",
  ];

  var COPY_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>';
  var CHECK_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  var LANG_ICONS = {
    python: '<svg viewBox="0 0 128 128"><path d="M63.8 6.4c-29.4 0-28.5 12.7-28.5 12.7L34.9 31c0 3.7.8 6.9 3.5 6.9h25v10.9H32.6c-18.7 0-26.3 11-26.3 27s7.6 27.2 26.3 27.2h6.1v-12.8s-1.1-15.1 14.7-15.1h28.1s13.8-1 13.8-14.9V44.4s1.2-16-14-16H64C64 28.4 65.6 19 63.8 6.4zM53.1 18.6a4.8 4.8 0 110 9.7 4.8 4.8 0 010-9.7zM97.2 36.3h-6.2v12.7s1.4 15.6-14.7 15.6H48s-13.8.4-13.8 15v15.6s-1.5 16 14 16h17.2c29.4 0 28.5-12.7 28.5-12.7l.4-11.8c0-3.7-.8-6.9-3.5-6.9h-25V88.8h30.8c18.7 0 26.3-11 26.3-27s-7.6-27.2-26.3-27.2zM75.1 100.8a4.8 4.8 0 110-9.7 4.8 4.8 0 010 9.7z" fill="currentColor"/></svg>',
    bash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    dockerfile: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.98 11.07l.2.04v-1.6c-.66.07-1.33.15-2.01.24v1.51c.6-.05 1.21-.11 1.8-.19zm1.06 6.13c-.6.04-1.2.06-1.8.07v1.86l1.8.02.01-1.95zm-3.04-4.22c.62-.06 1.22-.11 1.83-.16v-1.4c-.6.05-1.21.09-1.83.14z"/></svg>',
    html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10l-6-6-6 6"/><path d="M18 14l-6 6-6-6"/></svg>',
    css: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l1.5 17 5.5 1.5 5.5-1.5 1.5-17H5zm12.5 3H7.8L8.2 8h8.8l-.5 4.5-4 1.5-4-1.5-.2-2.5h-2L6.8 14l6.7 2 6.7-2 .8-8z"/></svg>',
    js: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm10.5 11c0 1.5.5 2.5 2 3 .5.2 1 .3 1.5.3 1 0 1.5-.5 1.5-1.5 0-1-1-1.5-2-2-1.5-.5-3.5-1-3.5-3.5C13 8 15 7.5 16.5 7.5c1.5 0 2.5.5 3 1.5l-2.5 1.5c-.2-.5-.5-.8-1-.8-.5 0-1 .2-1 1 0 1 1.5 1.5 3 2 1.5.5 2 2 2 3.5 0 2.5-2 3.5-4 3.5-2 0-3.5-1-4-2.5l2.5-1.5zm-8 1.5c0 2 1 3 3 3 1.5 0 2.5-1 3-2L9.5 17c-.2.5-.5 1-1 1-.5 0-1-.5-1-1V8.5h3.5v7l-2.5 1.5v1z"/></svg>',
    json: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14v18H5V3zm2 2v14h10V5H7zm3 3h4v8h-4V8zm1 1v6h2V9h-2z"/></svg>',
    yaml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="21" y2="21"/><line x1="3" y1="21" x2="21" y2="3"/></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  };

  function enhanceCodeBlocks() {
    var pres = document.querySelectorAll(".post-content pre");
    for (var i = 0; i < pres.length; i++) {
      var pre = pres[i];
      var code = pre.querySelector("code");
      if (!code) continue;

      pre.classList.add("has-enhanced-code");

      // Get language
      var langName = "text";
      var classList = Array.from(code.classList);
      for (var j = 0; j < classList.length; j++) {
        if (classList[j].startsWith("language-")) {
          langName = classList[j].replace("language-", "");
          break;
        }
      }

      // Create header
      var header = document.createElement("div");
      header.className = "code-header";

      var badge = document.createElement("div");
      badge.className = "lang-badge";
      var icon = LANG_ICONS[langName] || LANG_ICONS[langName.toLowerCase()] || LANG_ICONS["default"];
      if (langName === "javascript") icon = LANG_ICONS["js"];
      if (langName === "sh") icon = LANG_ICONS["bash"];
      
      badge.innerHTML = icon + "<span>" + langName + "</span>";
      header.appendChild(badge);

      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.setAttribute("aria-label", "Copy code");
      btn.innerHTML = COPY_SVG;
      header.appendChild(btn);

      btn.addEventListener(
        "click",
        (function (b, p) {
          return function () {
            var c = p.querySelector("code");
            var text = c ? c.textContent : p.textContent;
            navigator.clipboard.writeText(text).then(function () {
              b.innerHTML = CHECK_SVG;
              b.classList.add("copied");
              setTimeout(function () {
                b.innerHTML = COPY_SVG;
                b.classList.remove("copied");
              }, 1500);
            });
          };
        })(btn, pre),
      );

      // Create body wrapper
      var bodyWrap = document.createElement("div");
      bodyWrap.className = "code-body";

      // Calculate line count
      var text = code.textContent;
      if (text.endsWith("\n")) text = text.slice(0, -1);
      var lines = text.split("\n").length;

      var lnDiv = document.createElement("div");
      lnDiv.className = "line-numbers";
      lnDiv.setAttribute("aria-hidden", "true");
      var lnHtml = "";
      for (var l = 1; l <= lines; l++) {
        lnHtml += "<span>" + l + "</span>\n";
      }
      lnDiv.innerHTML = lnHtml;

      // DOM rearrange
      pre.insertBefore(header, code);
      pre.insertBefore(bodyWrap, code);
      bodyWrap.appendChild(lnDiv);
      bodyWrap.appendChild(code);
    }
  }

  function loadScript(url) {
    return new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = url;
      s.onload = s.onerror = resolve;
      document.head.appendChild(s);
    });
  }

  // Load highlight.min.js first (languages depend on it), then all languages in parallel
  loadScript(CDN + "highlight.min.js")
    .then(function () {
      return Promise.all(
        LANGUAGES.map(function (lang) {
          return loadScript(CDN + lang);
        }),
      );
    })
    .then(function () {
      hljs.highlightAll();
      enhanceCodeBlocks();
    });
})();
