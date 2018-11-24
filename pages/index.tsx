import * as React from "react";

import style from "./index.scss";

import DefaultLayout from '../src/components/layouts/default'
import CustomHead from "../src/components/head/index";

class IndexPage extends React.Component<{}> {
    public render() {
        return (
            <>
                <CustomHead pathname="top" />
                <DefaultLayout>
                    <div className={style.content} >Welcome to top</div>
                </DefaultLayout>
            </>
        )
    }
}

export default IndexPage
