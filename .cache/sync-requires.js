// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/about.js")),
  "component---src-pages-companion-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/companion.js")),
  "component---src-pages-gitgrub-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/gitgrub.js")),
  "component---src-pages-halchemy-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/halchemy.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/index.js")),
  "component---src-pages-snakes-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/snakes.js"))
}

