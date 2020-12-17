import React from "react";

import ModalDay from "./ModalDay";

export default {
  title: "Component/Card",
  component: ModalDay,
  parameters: { layout: "centered" },
};

const Template = () => <ModalDay />;

export const modalDay = Template.bind({});
modalDay.args = {
  user: {},
};
