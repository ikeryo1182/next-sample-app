import * as React from "react";

import CustomHead from "../src/components/head/index";
import DefaultLayout from "../src/components/layouts/default";
import style from "./index.scss";

class IndexPage extends React.Component<{}> {
  public render() {
    return (
      <>
        <CustomHead pathname="top" />
        <DefaultLayout>
          <div className={style.content}>Welcome to top</div>
        </DefaultLayout>
      </>
    );
  }
}

export default IndexPage;
