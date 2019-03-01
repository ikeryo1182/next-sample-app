import * as React from "react";

import DefaultLayout from "../src/components/layouts/default";

class IndexPage extends React.Component<{}> {
  public render() {
    return (
      <DefaultLayout>
        <div>Welcome to top</div>
        <style jsx>{`
          div {
            color: red;
          }
        `}</style>
      </DefaultLayout>
    );
  }
}

export default IndexPage;
