import { SkipNavContent } from '@reach/skip-nav';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import { Grommet } from 'grommet';
import './reset.css';

const GlobalStyle = createGlobalStyle`
  [data-reach-skip-link] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }

  [data-reach-skip-link]:focus {
    padding: 1rem;
    position: fixed;
    top: 10px;
    left: 10px;
    background: white;
    z-index: 1;
    width: auto;
    height: auto;
    clip: auto;
  }

  .Toastify__toast--success {
    background: #64b836;
  }
  
  .Toastify__toast--error {
    background: #a41c20;
  }
`;

function AppLayout({ children, showNav, pageTitle, initialLanguage }) {
  return (
    <React.Fragment>
      <Grommet plain>
        <Head>
          <title>{pageTitle || '// TODO: Title'}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyle />
        <Box mx="auto" mb="auto" width={1}>
          <SkipNavContent />
          {children}
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Grommet>
    </React.Fragment>
  );
}

AppLayout.defaultProps = {
  showNav: true,
};

export default AppLayout;
