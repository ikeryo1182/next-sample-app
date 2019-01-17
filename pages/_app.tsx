import App, { Container } from "next/app";
import React from "react";

import CustomHead from "../src/components/head/index";

interface AppProps {
  Component: React.Component;
  pageProps: any;
}

class Application extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <CustomHead />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Application;
