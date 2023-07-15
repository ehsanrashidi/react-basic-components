import { ComponentStory, ComponentMeta } from "@storybook/react";

import MenuButton from "./MenuButton";

export default {
    title: "reactBasicTemplate/MenuButton",
    component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const MenuButtonExample = Template.bind({});

MenuButtonExample.args = {
    placeHolder: "Actions",
    showSelectedItem: true,
    options: [
        { id: "act1", title: "Action 1", icon: <SvgPrint /> },
        { id: "act3", title: "Action 2", icon: <SvgPrint />, showDivider: true },
        { id: 2, title: "Go To Google", href: "https://google.com", icon: <SvgPrint /> },
    ],
    splitButton: true,
    color: "primary",
    variant: "outline",
    onChange: (selectedOption) => {
        //alert(selectedOption.id);
    },
};

function SvgPrint() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
            <circle cx={18} cy={11.5} r={1} />
        </svg>
    );
}
