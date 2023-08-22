import type { Meta, StoryObj } from "@storybook/react";

import ImageLink from "~/components/ImageLink";

import donateImg from "../../assets/images/donate-img.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/ImageLink",
    component: ImageLink,
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ maxWidth: "350px" }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof ImageLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Donate",
        img: donateImg,
        onClick: () => alert("This is an alert triggered by the ImageLink onClick handler.")
    }
};
