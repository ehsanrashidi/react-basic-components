import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button";
import Input from "../Input/Input";

import InputGroup from "./InputGroup";

export default {
    title: "reactBasicTemplate/InputGroup",
    component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => <InputGroup {...args} />;

export const InputGroupExample = Template.bind({});

InputGroupExample.args = {
    children: (
        <>
            <Button loadingType="border" label="btn 1" onClick={() => alert("btn 1 clicked")} />
            <Input value="input value" />
        </>
    ),
};
