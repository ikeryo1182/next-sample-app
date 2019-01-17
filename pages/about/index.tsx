import * as React from "react";

import style from "./index.scss";

import DefaultLayout from "../../src/components/layouts/default";
import CustomHead from "../../src/components/head/index";

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
