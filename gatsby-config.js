module.exports = {
  siteMetadata: {
    title: 'Arthur Jen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `81l3jtc3jps0`,
        accessToken: `5362989d9b7d8cf1260e71fca5340bf6ce10c3999f3271c4b5e74aa7aab9df93`,
      },
    }
  ]
}
