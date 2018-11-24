import * as React from "react";

import style from "./index.scss";

import DefaultLayout from '../../src/components/layouts/default'
import CustomHead from "../../src/components/head/index";

class ContactPage extends React.Component<{}> {
    public render() {
        return (
            <>
                <CustomHead pathname="contact" />
                <DefaultLayout>
                    <div className={style.content}>Welcome to contact!</div>
                </DefaultLayout>
            </>
        )
    }
}

export default ContactPage