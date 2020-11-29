import Layout from "../../components/layout/Layout";
import BlogPost from "../../components/BlogPost";
import HomeLink from "../../components/HomeLink";
import daysoutList from "../api/daysout";
import Dayout from "../../components/Dayout";
export default function DaysOut() {
  return (
    <div className="daysout">
      <Layout
        title="Ideas for the best days out in the Catterick area."
        description="Get inspiration for some great things to do in the Catterick area"
        keywords="days out, taxi catterick, whats on, catterick taxi, taxi information"
        canonical="https://sltaxicatterick.co.uk/blog/daysout"
      >
       
        <div className="content">
          <BlogPost title="Days out near Catterick" date="20 July 2019">
            <p>
              Looking for some inspiration for things to do in the Catterick
              area this summer. We have put together a list of recommendations
              to help you out. Catterick is on the edge of the Yorkshire dales
              so you don't travel very far for some great days out. We have also
              worked out some special offer taxi prices if you need transport to
              get there.
            </p>
            {daysoutList.map((dayout) => {
              return <Dayout key={dayout.id} {...dayout} />;
            })}
          </BlogPost>
          <HomeLink />
        </div>
      </Layout>
    </div>
  );
}
