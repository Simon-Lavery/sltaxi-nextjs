import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date())
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {"consentOnContinuedBrowsing":false,"whitelabel":false,"lang":"en","siteId":1944079,"cookiePolicyId":74435134, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-top-center","acceptButtonColor":"#f7b731","acceptButtonCaptionColor":"white","customizeButtonColor":"#212121","customizeButtonCaptionColor":"white","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","textColor":"#444444","backgroundColor":"#ffffff" }};
            `,
            }}
          />

          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            charset="UTF-8"
            async
          ></script>

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&family=Titillium+Web:wght@600&display=swap"
            rel="stylesheet"
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
export default CustomDocument;
