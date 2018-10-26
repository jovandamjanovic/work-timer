module.exports = {
    siteMetadata: {
        title: `Test`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Office Timer",
                short_name: "otimer",
                start_url: "/",
                background_color: "#FFFFFF",
                theme_color: "#FFFFFF",
                display: "minimal-ui", // This path is relative to the root of the site.
                icon: `src/images/icon.jpg`
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        }
    ]
}