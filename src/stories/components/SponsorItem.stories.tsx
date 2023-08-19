import type { Meta, StoryObj } from "@storybook/react";

import squareLogo from "~/assets/amex.png";
import horizontalLogo from "~/assets/britishairways.png";
import verticalLogo from "~/assets/sixhundred.png";
import SponsorItem from "~/components/SponsorItem";

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
        img: squareLogo
    }
};

export const SquareLogo: Story = {
    args: {
        img: squareLogo
    }
};

export const VerticalLogo: Story = {
    args: {
        img: verticalLogo
    }
};

export const HorizontalLogo: Story = {
    args: {
        img: horizontalLogo
    }
};

export const ItemWithOnClickEvent: Story = {
    args: {
        img: horizontalLogo,
        // eslint-disable-next-line no-alert
        onClick: () => alert("This is an alert triggered by clicking the sponsor item")
    }
};
