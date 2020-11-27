import LinkButton from "./Link";
import React from "react";

export default {
  title: "Component/Link",
  component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const Start = Template.bind({});
Start.args = {
  text: "Start",
};
