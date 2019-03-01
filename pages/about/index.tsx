import * as React from "react";

import DefaultLayout from "../../src/components/layouts/default";

class AboutPage extends React.Component<{}> {
  public render() {
    return (
      <DefaultLayout>
        <div>Welcome to about!</div>
      </DefaultLayout>
    );
  }
}

export default AboutPage;
