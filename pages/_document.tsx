import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextSeo } from 'next-seo';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        { CssBaseline.flush() }
        <NextSeo
          title="Velt Documentation"
          description="Documentation for the Velt SDK, an easy way to provide collaboration to your users. Easily embed and customize our async and realtime features in your application."
        />
        <link rel="icon" href="/static/favicon.png" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const theme = window.matchMedia("(prefers-color-scheme: dark)");
                  const darkMode = localStorage.getItem("darkMode");
                  if (darkMode === 'true') {
                    document.documentElement.setAttribute("dark", "");
                  } else if (darkMode === 'false') {
                    document.documentElement.removeAttribute("dark");
                  } else if (theme.matches) {
                    document.documentElement.setAttribute("dark", "");
                  } else if (!theme.matches) {
                    document.documentElement.removeAttribute("dark");
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;