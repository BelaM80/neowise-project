import Input from "./Input";
import React from "react";

export default {
  title: "Component/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  placeholder: "Enter your name",
  value: "",
};

export const NotEmpty = Template.bind({});
NotEmpty.args = {
  placeholder: "Enter your name",
  value: "Leon",
};
