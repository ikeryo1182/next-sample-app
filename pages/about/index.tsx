import * as React from "react";

import DefaultLayout from '../../src/components/layouts/default'
import CustomHead from "../../src/components/head/index";

class AboutPage extends React.Component<{}> {
    public render() {
        return (
            <>
                <CustomHead pathname="about" />
                <DefaultLayout>
                    <div>Welcome to about!</div>
                </DefaultLayout>
            </>
        )
    }
}

export default AboutPage