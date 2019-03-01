import Head from "next/head";
import { WithRouterProps, withRouter } from "next/router";
import * as React from "react";

interface State {
  url: string;
}

interface Props extends WithRouterProps {}

class CustomHead extends React.Component<Props, State> {
  public state: State = {
    url: "/"
  };

  private handleRouteChange = (url: string) => {
    this.setState({ url });
  };

  public componentDidMount() {
    const { router } = this.props;
    if (router) {
      this.handleRouteChange(router.asPath);
      router.events.on("routeChangeStart", this.handleRouteChange);
    }
  }

  public componentWillUnmount() {
    const { router } = this.props;
    if (router) {
      router.events.off("routeChangeStart", this.handleRouteChange);
    }
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

// HELP: because there is bug of withRouter, it must be any
export default withRouter(CustomHead as any);
