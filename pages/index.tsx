import * as React from "react";

import DefaultLayout from "../src/components/layouts/default";
import style from "./index.scss";

class IndexPage extends React.Component<{}> {
  public render() {
    return (
      <>
        <DefaultLayout>
          <div className={style.content}>Welcome to top</div>
        </DefaultLayout>
      </>
    );
  }
}

export default IndexPage;
