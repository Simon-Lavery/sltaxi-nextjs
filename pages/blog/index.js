import Layout from "../../components/layout/Layout";
import Hero from "../../components/layout/Hero";
import HomeLink from "../../components/HomeLink";
import styles from "../../styles/Blogs.module.css";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Layout
        title="Local events and Taxi information"
        description="Local area and Taxi information in Catterick garrison."
        keywords="taxi catterick, airport transfers, catterick taxi, taxi information"
        canonical="https://sltaxicatterick.co.uk/blogs"
      >
        <Hero
          imgURL="bloghero"
          altText="Background image with words related to social media"
          ext=".jpg"
        />
        <div className={styles.blogs}>
          <div className="content content-to-wide">
            <h2>Catterick taxi guide</h2>
            <p>
              <time>17th July 2019</time>
            </p>
            <p>
              I often get customers telling me they have been charged more for
              the same journey with another taxi, so I am going to explain why
              this shouldn't happen
              <Link href="blog/taxiguide">
                <a className="inline-link"> ...Read more</a>
              </Link>
            </p>
            <h2>Days out in the local area</h2>
            <p>
              <time>25th July 2019</time>
            </p>
            <p>
              Looking for some inspiration for things to do in the Catterick
              area this summer. We have put together a list of recommendations
              to help you out
              <Link href="blog/daysout">
                <a className="inline-link"> ...Read more</a>
              </Link>
            </p>
            <HomeLink />
          </div>
        </div>
      </Layout>
    </div>
  );
}
