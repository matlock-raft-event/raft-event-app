import type { Meta, StoryObj } from "@storybook/react";

import Heading from "~/components/Heading";
import { SECONDARY } from "~/theme/palette";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/Heading",
    component: Heading,
    tags: ["autodocs"],
    argTypes: {
    }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        subtitle: "I am a subtitle",
        title: "I am a title"
    }
};

export const WithSubitle: Story = {
    args: {
        subtitle: "I am a subtitle",
        title: "I am a title"
    }
};

export const WithoutSubtitle: Story = {
    args: {
        title: "I am a title"
    }
};

export const Secondary: Story = {
    args: {
        color: SECONDARY.main,
        subtitle: "I am a subtitle",
        title: "I am a title"
    }
};
