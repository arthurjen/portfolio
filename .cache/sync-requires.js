// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/index.js")),
  "component---src-pages-project-js": preferDefault(require("/Users/arthurjen/alchemy/401/portfolio/src/pages/project.js"))
}

