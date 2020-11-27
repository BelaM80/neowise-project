import React from "react";

import HomePage from "./HomePage";
import * as HeaderStories from "../Header/Header.stories";

export default {
  title: "Example/Page",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Home = Template.bind({});
Home.args = {
  ...HeaderStories.Title.args,
};
