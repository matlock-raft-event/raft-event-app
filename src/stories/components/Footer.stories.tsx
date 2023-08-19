import type { Meta, StoryObj } from "@storybook/react";

import Footer from "~/components/Footer";
import { PRIMARY, SECONDARY } from "~/theme/palette";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/Footer",
    component: Footer,
    tags: ["autodocs"],
    argTypes: {
    }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    }
};

export const Primary: Story = {
    args: {
        color: PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        color: SECONDARY
    }
};
