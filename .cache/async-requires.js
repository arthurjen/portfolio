// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-companion-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/companion.js" /* webpackChunkName: "component---src-pages-companion-js" */),
  "component---src-pages-gitgrub-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/gitgrub.js" /* webpackChunkName: "component---src-pages-gitgrub-js" */),
  "component---src-pages-halchemy-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/halchemy.js" /* webpackChunkName: "component---src-pages-halchemy-js" */),
  "component---src-pages-index-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-snakes-js": () => import("/Users/arthurjen/alchemy/401/portfolio/src/pages/snakes.js" /* webpackChunkName: "component---src-pages-snakes-js" */)
}

exports.data = () => import("/Users/arthurjen/alchemy/401/portfolio/.cache/data.json")

