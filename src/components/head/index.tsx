import Head from "next/head";
import * as React from "react";

interface CustomHeadProps {
  pathname: string;
}

const CustomHead: React.SFC<CustomHeadProps> = (props: CustomHeadProps) => {
  return (
    <Head>
      <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet" />
      <title>{props.pathname}</title>
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta content={`${props.pathname}`} name="description" />
      <meta content={`${props.pathname}`} name="keywords" />
    </Head>
  );
};

export default CustomHead;
