import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuButtonDivider from "../MenuButtonDivider";

import MenuButton from "./MenuButton";

export default {
    title: "reactBasicTemplate/MenuButton",
    component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const MenuButtonExample = Template.bind({});

MenuButtonExample.args = {
    placeHolder: "select an item",
    options: [
        <div className="dropdown-item">Action 1</div>,
        <div className="dropdown-item">Action 2</div>,
        <div className="dropdown-item">Action 3</div>,
    ],
};
