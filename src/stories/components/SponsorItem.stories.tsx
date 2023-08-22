import type { Meta, StoryObj } from "@storybook/react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import squareLogo from "~/assets/images/amex.png";
import horizontalLogo from "~/assets/images/britishairways.png";
import verticalLogo from "~/assets/images/sixhundred.png";
import SponsorItem from "~/components/SponsorItem";

const TEST_SQUARE_IMG: IGatsbyImageData = {
    layout: "constrained",
    width: 1198,
    height: 1198,
    images: {
        fallback: {
            sizes: "(min-width: 1198px) 1198px, 100vw",
            src: squareLogo,
            srcSet: squareLogo
        }
    }
};
const TEST_VERTICAL_IMG: IGatsbyImageData = {
    layout: "constrained",
    width: 128,
    height: 540,
    images: {
        fallback: {
            sizes: "(min-width: 128px) 128px, 100vw",
            src: verticalLogo,
            srcSet: verticalLogo
        }
    }
};
const TEST_HORIZONTAL_IMG: IGatsbyImageData = {
    layout: "constrained",
    width: 1280,
    height: 201,
    images: {
        fallback: {
            sizes: "(min-width: 1280px) 1280px, 100vw",
            src: horizontalLogo,
            srcSet: horizontalLogo
        }
    }
};
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/SponsorItem",
    component: SponsorItem,
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ maxWidth: "500px" }}>
                <Story />
            </div>
        )
    ]

} satisfies Meta<typeof SponsorItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        img: TEST_SQUARE_IMG
    }
};

export const SquareLogo: Story = {
    args: {
        img: TEST_SQUARE_IMG
    }
};

export const VerticalLogo: Story = {
    args: {
        img: TEST_VERTICAL_IMG
    }
};

export const HorizontalLogo: Story = {
    args: {
        img: TEST_HORIZONTAL_IMG
    }
};

export const ItemWithOnClickEvent: Story = {
    args: {
        img: TEST_HORIZONTAL_IMG,
        // eslint-disable-next-line no-alert
        onClick: () => alert("This is an alert triggered by clicking the sponsor item")
    }
};
