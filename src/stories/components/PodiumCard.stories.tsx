import type { Meta, StoryObj } from "@storybook/react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import squareLogo from "~/assets/images/amex.png";
import PodiumCard from "~/components/PodiumCard";

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

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/PodiumCard",
    component: PodiumCard,
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ maxWidth: "350px" }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof PodiumCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        podium: 1,
        img: TEST_SQUARE_IMG,
        title: "The podium recipient"
    }
};

export const First: Story = {
    args: {
        podium: 1,
        img: TEST_SQUARE_IMG,
        title: "The podium recipient"
    }
};

export const Second: Story = {
    args: {
        podium: 2,
        img: TEST_SQUARE_IMG,
        title: "The podium recipient"
    }
};

export const Third: Story = {
    args: {
        podium: 3,
        img: TEST_SQUARE_IMG,
        title: "The podium recipient"
    }
};
