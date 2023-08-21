import type { Meta, StoryObj } from "@storybook/react";
import PodiumBadge from "~/components/PodiumBadge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/PodiumBadge",
    component: PodiumBadge,
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ maxWidth: "350px" }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof PodiumBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        podium: 1
    }
};

export const First: Story = {
    args: {
        podium: 1
    }
};

export const Second: Story = {
    args: {
        podium: 2
    }
};

export const Third: Story = {
    args: {
        podium: 3
    }
};
