import type { Meta, StoryObj } from "@storybook/react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import squareLogo from "~/assets/images/amex.png";
import UpdateCard from "~/components/UpdateCard";

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
    title: "Components/UpdateCard",
    component: UpdateCard,
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ maxWidth: "350px" }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof UpdateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        img: TEST_SQUARE_IMG,
        title: "Title of the update",
        description: "Nunc sed vulputate nibh, ut placerat nisl. Etiam quis ante vel magna molestie mollis ac eu " +
            "nisl. Donec vehicula mauris eu congue rhoncus. Ut orci lacus, scelerisque non posuere a, porta vel " +
            "lorem. Quisque auctor accumsan arcu, quis venenatis est consectetur vel. Donec et erat placerat, " +
            "finibus nunc in, efficitur nulla. Curabitur porttitor quam nulla, at porta justo lobortis congue. " +
            "Integer sit amet lectus quis lectus ultricies posuere. Mauris tristique rhoncus tortor. Sed quis " +
            "vestibulum neque. Duis sed tempus augue. Aliquam eu odio consequat, consequat lectus a, molestie " +
            "sapien.",
        onClick: () => alert("This alert was triggered by the UpdateCard onClick handler."),
        readOnly: false
    }
};

export const ReadOnly: Story = {
    args: {
        img: TEST_SQUARE_IMG,
        title: "Title of the update",
        description: "Nunc sed vulputate nibh, ut placerat nisl. Etiam quis ante vel magna molestie mollis ac eu " +
            "nisl. Donec vehicula mauris eu congue rhoncus. Ut orci lacus, scelerisque non posuere a, porta vel " +
            "lorem. Quisque auctor accumsan arcu, quis venenatis est consectetur vel. Donec et erat placerat, " +
            "finibus nunc in, efficitur nulla. Curabitur porttitor quam nulla, at porta justo lobortis congue. " +
            "Integer sit amet lectus quis lectus ultricies posuere. Mauris tristique rhoncus tortor. Sed quis " +
            "vestibulum neque. Duis sed tempus augue. Aliquam eu odio consequat, consequat lectus a, molestie " +
            "sapien.",
        readOnly: true
    }
};

export const NoDescription: Story = {
    args: {
        img: TEST_SQUARE_IMG,
        title: "Title of the update",
        readOnly: false,
        onClick: () => alert("This alert was triggered by the UpdateCard onClick handler.")
    }
};
