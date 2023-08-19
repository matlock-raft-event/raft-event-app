import type { Meta, StoryObj } from "@storybook/react";
import { StoryFn } from "@storybook/react";

import Waves from "~/components/Waves";
import { GREEN, INFO, WARNING, YELLOW } from "~/theme/palette";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Components/Waves",
    component: Waves,
    tags: ["autodocs"],
    argTypes: {
    }
} satisfies Meta<typeof Waves>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
};

export const Variant1: Story = {
    args: {
        variant: 1,
        topColor: YELLOW.contrastText,
        bottomColor: YELLOW.main
    }
};

export const Variant2: Story = {
    args: {
        variant: 2,
        topColor: INFO.contrastText,
        bottomColor: INFO.main
    }
};

export const Variant3: Story = {
    args: {
        variant: 3,
        topColor: GREEN.contrastText,
        bottomColor: GREEN.main
    }
};

export const Variant4: Story = {
    args: {
        variant: 4,
        topColor: WARNING.contrastText,
        bottomColor: WARNING.main
    }
};

export const LargerHeight: Story = {
    args: {
        variant: 4,
        topColor: WARNING.contrastText,
        bottomColor: WARNING.main
    },
    decorators: [(Story: StoryFn) => <div style={{ height: 500 }}><Story /></div>]
};
