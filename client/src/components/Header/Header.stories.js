import React from "react";

import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
};

const Template = () => <Header />;

export const Title = Template.bind({});
Title.args = {
  user: {},
};
