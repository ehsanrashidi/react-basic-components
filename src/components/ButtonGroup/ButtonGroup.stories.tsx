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
            <Button color="danger" badge="1" badgeType="primary" label="left" />
            <Button color="primary" badge="2" badgeType="danger" label="middle" />
            <Button color="success" badge="3" badgeType="warning" label="right" />
        </>
    ),
};
