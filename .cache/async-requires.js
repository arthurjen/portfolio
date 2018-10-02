// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-project-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/project.js" /* webpackChunkName: "component---src-pages-project-js" */)
}

exports.data = () => import("/Users/arthurjen/alchemy/401/portfolio/.cache/data.json")

