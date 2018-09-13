module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nz6p5gptgz07`,
        accessToken: `cc93aa49f30ce75f2ffb322992759ec091aa81518c0aeb5f6f259b99113d79d3`,
        host: `preview.contentful.com`,
      },
    }
  ]
};