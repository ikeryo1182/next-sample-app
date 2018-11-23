import * as React from "react"
import Head from 'next/head';

interface CustomHeadProps {
    pathname: string;
}

const CustomHead: React.SFC<CustomHeadProps> = (props: CustomHeadProps) => {
    return (
            <Head>
                <title>{props.pathname}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={`${props.pathname}`} />
                <meta name="keywords" content={`${props.pathname}`} />
            </Head>
    )
}

export default CustomHead