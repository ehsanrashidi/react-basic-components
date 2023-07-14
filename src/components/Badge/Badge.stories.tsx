import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./Badge";

export default {
    title: "reactBasicTemplate/Badge",
    component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const badgeExample = Template.bind({});

badgeExample.args = {
    label: "Badge",
};
