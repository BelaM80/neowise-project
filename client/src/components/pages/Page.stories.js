import React from "react";

import Page from "./Page";
import * as HeaderStories from "../../components/Header/Header.stories";

export default {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Home = Template.bind({});
Home.args = {
  ...HeaderStories.LoggedIn.args,
};

export const Start = Template.bind({});
Start.args = {
  ...HeaderStories.LoggedOut.args,
};
