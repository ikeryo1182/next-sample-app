import * as React from "react";

import DefaultLayout from '../src/components/layouts/default'

class Page extends React.Component<{}> {
    public render() {
        return (
            <DefaultLayout>
                 <div>Welcome to next.js!</div>
            </DefaultLayout>
        )
    }
}

export default Page
