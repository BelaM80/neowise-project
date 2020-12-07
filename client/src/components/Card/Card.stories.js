import React from "react";

import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
  parameters: { layout: "centered" },
};

const Template = () => <Card />;

export const card = Template.bind({});
card.args = {
  user: {},
};
