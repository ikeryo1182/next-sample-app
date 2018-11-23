import * as React from "react";

import DefaultLayout from '../../src/components/layouts/default'
import CustomHead from "../../src/components/head/index";

class ContactPage extends React.Component<{}> {
    public render() {
        return (
            <>
                <CustomHead pathname="contact" />
                <DefaultLayout>
                    <div>Welcome to contact!</div>
                </DefaultLayout>
            </>
        )
    }
}

export default ContactPage