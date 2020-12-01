import Layout from "../../components/layout/Layout";
import HomeLink from "../../components/HomeLink";
import Link from "next/link";
import Header from "../../components/header";
import styles from '../../styles/blog.module.css';

export default function Index() {
  return (
    <div>
      <Layout
        title="Local events and Taxi information"
        description="Local area and Taxi information in Catterick garrison."
        keywords="taxi catterick, airport transfers, catterick taxi, taxi information"
        canonical="https://sltaxicatterick.co.uk/blogs"
      >
        <Header
          title1="Taxi guide &"
          title2="Local info"
          intro="Get guides on how to save money on taxis or how taxis work in the area, also we have reccomended days out if you are stuck for something to do."
        />
        <section className={styles.blogs}>
          <div className="content-narrow">
            <div className={styles.blog}>
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
            </div>
            <div className={styles.blog}>
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
            </div>
            <HomeLink />
          </div>
        </section>
      </Layout>
    </div>
  );
}
