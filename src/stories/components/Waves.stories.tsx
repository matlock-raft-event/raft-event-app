import type { Meta, StoryObj } from "@storybook/react";
import { YELLOW, GREEN, INFO, WARNING } from "../../theme/palette";

import Waves from "../../components/Waves";
import { StoryFn } from "@storybook/react";

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
        topColor: YELLOW.main.contrastText,
        bottomColor: YELLOW.main.color
    }
};

export const Variant2: Story = {
    args: {
        variant: 2,
        topColor: INFO.main.contrastText,
        bottomColor: INFO.main.color
    }
};

export const Variant3: Story = {
    args: {
        variant: 3,
        topColor: GREEN.main.contrastText,
        bottomColor: GREEN.main.color
    }
};

export const Variant4: Story = {
    args: {
        variant: 4,
        topColor: WARNING.main.contrastText,
        bottomColor: WARNING.main.color
    }
};

export const LargerHeight: Story = {
    args: {
        variant: 4,
        topColor: WARNING.main.contrastText,
        bottomColor: WARNING.main.color
    },
    decorators: [(Story: StoryFn) => <div style={{ height: 500 }}><Story /></div>]
};
