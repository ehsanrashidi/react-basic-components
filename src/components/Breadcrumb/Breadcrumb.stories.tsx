import { ComponentStory, ComponentMeta } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

export default {
    title: "reactBasicTemplate/Breadcrumb",
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const BreadcrumbExample = Template.bind({});

BreadcrumbExample.args = {
    list: [
        { label: "Home", href: "#home" },
        { label: "Categories", href: "#categories", active: false },
        { label: "Category 1", active: true },
    ],
};
