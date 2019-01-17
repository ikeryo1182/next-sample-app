import * as React from "react";

import CustomHead from "../../src/components/head/index";
import DefaultLayout from "../../src/components/layouts/default";
import style from "./index.scss";

class ContactPage extends React.Component<{}> {
  public render() {
    return (
      <>
        <CustomHead pathname="contact" />
        <DefaultLayout>
          <div className={style.content}>Welcome to contact!</div>
        </DefaultLayout>
      </>
    );
  }
}

export default ContactPage;
