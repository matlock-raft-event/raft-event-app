import type { GatsbyConfig } from "gatsby";
import path from "path";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Raft Event App`,
        siteUrl: `https://www.matlockraftevent.co.uk`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        { // Allow absolute imports
            resolve: "gatsby-plugin-root-import",
            options: {
                "~": path.resolve(__dirname, "src"),
            },
        },
        { // Contentful integration plugin
            resolve: "gatsby-source-contentful",
            options: {
                "accessToken": process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                "icon": "src/images/icon.png"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-google-gtag",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
    ]
};

export default config;
