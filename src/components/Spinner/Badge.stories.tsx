import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
    title: "reactBasicTemplate/Spinner",
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const SpinnerExample = Template.bind({});

SpinnerExample.args = {
    small: false,
};
