import { ComponentStory, ComponentMeta } from "@storybook/react";

import MenuButtonDivider from "./MenuButtonDivider";

export default {
    title: "reactBasicTemplate/MenuButtonDivider",
    component: MenuButtonDivider,
} as ComponentMeta<typeof MenuButtonDivider>;

const Template: ComponentStory<typeof MenuButtonDivider> = (args) => <MenuButtonDivider {...args} />;

export const MenuButtonDividerExample = Template.bind({});

MenuButtonDividerExample.args = {};
