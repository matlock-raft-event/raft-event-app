import React, { ReactNode } from "react";

import useSiteMetadata from "../hooks/useSiteMetadata";

interface SEOProps {
    title?: string;
    description?: string;
    pathname?: string;
    children?: ReactNode;
}

const SEO = ({ title, description, pathname, children }: SEOProps) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        // image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ""}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta content={seo.description} name="description" />
            <html lang="en-gb" />
            {/* <meta content={seo.image} name="image" /> */}
            {/* <meta content="summary_large_image" name="twitter:card" /> */}
            {/* <meta content={seo.title} name="twitter:title" /> */}
            {/* <meta content={seo.url} name="twitter:url" /> */}
            {/* <meta content={seo.description} name="twitter:description" /> */}
            {/* <meta content={seo.image} name="twitter:image" /> */}
            {/* <meta content={seo.twitterUsername} name="twitter:creator" /> */}
            {children}
        </>
    );
};

export default SEO;
