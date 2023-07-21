import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";

import ButtonGroup from "./ButtonGroup";

export default {
    title: "reactBasicTemplate/ButtonGroup",
    component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const ButtonGroupExample = Template.bind({});

ButtonGroupExample.args = {
    children: (
        <>
            <Button loadingType="border" color="danger" badge="1" badgeType="primary" label="left" />
            <Button loadingType="border" color="primary" badge="2" badgeType="danger" label="middle" />
            <Button loadingType="border" color="success" badge="3" badgeType="warning" label="right" />
        </>
    ),
};
