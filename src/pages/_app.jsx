import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import AppLayout from '../components/AppLayout';
import withApolloClient from '../../lib/with-apollo-client';

class MyApp extends App {
  static async getInitialProps(initialProps) {
    const { Component, ctx } = initialProps;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <AppLayout>
          <Component apolloClient={apolloClient} />
        </AppLayout>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
