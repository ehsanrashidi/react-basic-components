import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "./Tab";
import Dropdown from "../Dropdown/Dropdown";

export default {
    title: "reactBasicTemplate/Tab",
    component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const TabExample = Template.bind({});

TabExample.args = {
    defaultKey:"2",
    type:"tabs",
    items:[
        {title:"tab1", key:"1",content:"tab1"},
        {title:"tab 2", key:"2",content:2},
        {title:"tab3", key:"3",disabled:true,content:<div>tab 3</div>},
    ]
};
