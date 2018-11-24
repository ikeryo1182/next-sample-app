import React from 'react'
import App, { Container } from 'next/app'

interface AppProps {
  Component: React.Component
  pageProps: any
}

class Application extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {

    const pageProps =
      Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
          <Component { ...pageProps } />
      </Container>
    )
  }
}

export default Application