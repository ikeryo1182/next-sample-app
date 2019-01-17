import Head from "next/head";
import Router from "next/router";
import * as React from "react";

interface State {
  url: string;
}

class CustomHead extends React.Component<{}> {
  public state: State = {
    url: ""
  };

  private handleRouteChange = (url: string) => {
    this.setState({ url });
  };

  public componentDidMount() {
    this.handleRouteChange(Router.asPath);
    Router.events.on("routeChangeStart", this.handleRouteChange);
  }

  public componentWillUnmount() {
    Router.events.off("routeChangeStart", this.handleRouteChange);
  }

  public render() {
    const { url } = this.state;

    return (
      <Head>
        <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet" />
        <title>{url}</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta content={`${url}`} name="description" />
        <meta content={`${url}`} name="keywords" />
      </Head>
    );
  }
}

export default CustomHead;
