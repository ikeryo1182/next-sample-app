import * as React from "react"

import Head from 'next/head';

interface CustomHeadProps {
    pathname: string;
}

const CustomHead: React.SFC<CustomHeadProps> = (props: CustomHeadProps) => {
    return (
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
            <title>{props.pathname}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={`${props.pathname}`} />
            <meta name="keywords" content={`${props.pathname}`} />
        </Head>
    )
}

export default CustomHead