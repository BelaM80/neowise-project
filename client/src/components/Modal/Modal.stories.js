import React from "react";

import Modal from "./Modal";

export default {
  title: "Component/Card",
  component: Modal,
  parameters: { layout: "centered" },
};

const Template = () => <Modal />;

export const modal = Template.bind({});
modal.args = {
  user: {},
};
