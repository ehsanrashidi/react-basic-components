import { ComponentStory, ComponentMeta } from "@storybook/react";

import Flex from "../Flex/Flex";

export default {
    title: "reactBasicTemplate/Flex",
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexExample = Template.bind({});

FlexExample.args = {
    align: "flex-start",
    justify: "space-between",
    elementName:"h1",
    children: (
        <>
            <div>1</div>
            <div>2</div>
        </>
    ),
};
