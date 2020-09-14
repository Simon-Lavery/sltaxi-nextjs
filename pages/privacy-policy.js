import Layout from "../components/layout/Layout";
import HomeLink from "../components/HomeLink";
import axios from "axios";

const PrivacyPolicy = ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="content">
          <div
            style={{ marginTop: "6rem" }}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
          <HomeLink />
        </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "https://www.iubenda.com/api/privacy-policy/74435134/no-markup"
  );
  return {
    props: {
      data: res.data.content,
    },
  };
}

export default PrivacyPolicy;
