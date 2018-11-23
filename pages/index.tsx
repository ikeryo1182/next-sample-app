import * as React from "react";

import DefaultLayout from '../src/components/layouts/default'
import CustomHead from "../src/components/head/index";

class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <>
                <CustomHead pathname="top" />
                <DefaultLayout>
                    <div>Welcome to top</div>
                </DefaultLayout>
            </>
        )
    }
}

export default IndexPage
