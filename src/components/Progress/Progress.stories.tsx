import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "./Progress";

export default {
    title: "reactBasicTemplate/Progress",
    component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const ProgressExample = Template.bind({});

ProgressExample.args = {
    striped: true,
    value: 20,
};
