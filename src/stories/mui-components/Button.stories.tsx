import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "MUI Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {}

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Hello world"
    }
};
