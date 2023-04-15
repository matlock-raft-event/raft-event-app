import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";
import path from "path";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

const config: GatsbyConfig = {
    pathPrefix: "/raft-event-app/",

    siteMetadata: {
        title: "Raft Event App",
        siteUrl: "https://www.matlockraftevent.co.uk"
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and
    // better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        { // Allow absolute imports
            resolve: "gatsby-plugin-root-import",
            options: {
                "~": path.resolve(__dirname, "src")
            }
        },
        { // Contentful integration plugin
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GATSBY_GA_TRACKING_ID // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    respectDNT: true
                    // Avoids sending pageview hits from custom paths
                    // exclude: ["/preview/**", "/do-not-track/me/too/"],
                }
            }
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be omitted or customized
                stages: ["develop"],
                extensions: ["ts", "tsx"],
                exclude: ["node_modules", ".cache", "public"]
                // Any additional eslint-webpack-plugin options below
                // ...
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx"
    ]
};

export default config;
