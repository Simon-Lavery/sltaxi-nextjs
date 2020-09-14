import { isMobile } from "react-device-detect";
import Navbar from "./navbar/Navbar";
import CallButton from "./CallButton";
import Footer from "./Footer";
import Head from "next/head";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const Layout = ({
  children,
  title = "",
  description = "",
  keywords = null,
  canonical = "",
  schema = null,
}) => {
  return (
    <div className="layout">
      <Head>
        <title key={title}>{title}</title>
        <meta key={description} name="description" content={description} />
        {keywords && <meta key={keywords} name="keywords" content={keywords} />}
        <link key={canonical} href={canonical} rel="canonical" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#eceff1" />
        {schema && (
          <script
            key={schema.provider.name}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({ schema }),
            }}
          ></script>
        )}
      </Head>
      <Navbar />
      {children}
      {isMobile && <CallButton />}
      <Footer />
    </div>
  );
};

export default Layout;
