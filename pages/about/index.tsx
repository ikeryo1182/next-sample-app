import * as React from "react";

import CustomHead from "../../src/components/head/index";
import DefaultLayout from "../../src/components/layouts/default";
import style from "./index.scss";

class AboutPage extends React.Component<{}> {
  public render() {
    return (
      <>
        <CustomHead pathname="about" />
        <DefaultLayout>
          <div className={style.content}>Welcome to about!</div>
        </DefaultLayout>
      </>
    );
  }
}

export default AboutPage;
