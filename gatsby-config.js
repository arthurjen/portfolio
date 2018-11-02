// require('dotenv').config();
// const { SPACE_ID, ACCESS_TOKEN } = process.env;
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/`
      }
    }
  ]
};