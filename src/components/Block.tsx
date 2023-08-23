import { Link } from "@mui/material";
import { PortableText, PortableTextProps } from "@portabletext/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PortableTextBlock, TypedObject } from "@portabletext/types";

const Block = <B extends TypedObject = PortableTextBlock>({ value, components, ...rest }: PortableTextProps<B>) => {
    const blockComponents = {
        marks: {
            // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-explicit-any
            internalLink: ({ value: val, children }: any) => {
                const { slug = {} } = val;
                const href = `/${slug.current}`;
                return (
                    <Link href={href}>{children}</Link>
                );
            },
            // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-explicit-any
            link: ({ value: val, children }: any) => {
                // Read https://css-tricks.com/use-target_blank/
                const { blank, href } = val;
                return blank
                    ? <Link href={href} rel="noopener noreferrer" target="_blank">{children}</Link>
                    : <Link href={href}>{children}</Link>;
            },
            ...components?.marks
        }
    };

    return (
        <PortableText components={blockComponents} value={value as never} {...rest} />
    );
};

export default Block;
