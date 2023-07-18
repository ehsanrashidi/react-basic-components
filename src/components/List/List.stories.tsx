import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "./List";

export default {
    title: "reactBasicTemplate/List",
    component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListExample = Template.bind({});

ListExample.args = {
    onSelected: (selectedItem) => {
        //alert(selectedItem.id);
    },
    items: [
        { id: "1", label: "item 1", type: "primary", badge: "new", badgeType: "primary" },
        { id: "2", label: "item 2" },
        { id: "3", label: "item 3", badge: "12", badgeType: "danger" },
        { id: "4", label: "item 4" },
        { id: "5", label: "item 5", badge: "warn", badgeType: "warning" },
        { id: "6", label: "item 6" },
    ],
};
