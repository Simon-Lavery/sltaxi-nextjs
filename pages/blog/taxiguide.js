import Layout from "../../components/layout/Layout";
import BlogPost from "../../components/BlogPost";
import HomeLink from "../../components/HomeLink";

export default function Taxiguide() {
  return (
    <div>
      <Layout
        title="Catterick taxi prices and customer tips"
        description="Get the best prices and never get overcharged with this handy guide to taxis in Catterick 2019. Learn the types of car available and how the prices are set."
        keywords="taxi in catterick, save money, tips, guide"
        canonical="https://sltaxicatterick.co.uk/blog/taxiguide"
      >
      

        <div className="content content-to-wide">
          <BlogPost title="Catterick taxi guide" date="20 May 2019">
            <p>
              Taxi's can be confusing but they don't have to be. I have noticed
              from speaking to lots of customers most of them don't understand
              how taxis work and they are surprised to hear that there are rules
              regarding prices, most people seem to think that taxi companies in
              Catterick can and do charge as much as they like, but that is not
              true. The more you understand, the easier it is to get the best
              price from your local taxi service so I have put together this
              short guide to help out.
            </p>

            <h3>Pricing</h3>
            <p>
              I often get new customers telling me that the same journey metered
              more with another taxi, so I am going to explain why this
              shouldn't happen. The taxi prices are decided by the local council
              and every taxi in Richmondshire is set to the same rates, this is
              the maximum price all taxi's can charge. Each taxi must have a
              meter fitted to calculate this charge. The meter is programmed and
              sealed by a local contractor and companies or drivers can't change
              the price, only the tariff depending on the time of day or if they
              need a car or minibus.
            </p>
            <p>
              Most customers don't realise the meter is for their benefit and
              must be switched on at the start of each and every journey. So now
              you know that every taxi in Catterick is set to the same rate you
              know that the meter price for the same journey should be the same
              whatever taxi or company you use.
            </p>

            <p>
              The fare is based on distance ( and time when the vehicle is
              stationary ). The meter has a starting price which covers the
              first half mile of the journey and then increases by a set amount
              every 1/10th of a mile.
            </p>

            <h4>There are 4 tariffs:</h4>
            <ul>
              <li>
                Tariff 1 - CAR or MINIBUS <br class="mobile-line-break" /> 1 - 4
                passengers 6am - 11pm
              </li>
              <li>
                Tariff 2 - CAR or MINIBUS
                <br class="mobile-line-break" /> 1 - 4 passengers 11pm - 6am
              </li>
              <li>
                Tariff 3 - MINIBUS
                <br class="mobile-line-break" /> 5+ passengers 6am - 11pm
              </li>
              <li>
                Tariff 4 - MINIBUS
                <br class="mobile-line-break" /> 5+ passengers 11pm - 6am
              </li>
            </ul>
            <p>
              View tariff card
              <a href="https://www.richmondshire.gov.uk/media/10848/richmondshire-district-council-hackney-carriage-table-of-fares.pdf">
                here
              </a>
            </p>

            <p>
              Using this tariff card you can work out the maximum charge for any
              catterick taxi just by using the distance you would like to
              travel, for example, if you needed a taxi on tariff 1 from
              Catterick to Darlington which is roughly 17 miles, it would be
              £2.60 for the first half mile and £2 per mile for 16.5 miles so
              £35.60.
            </p>

            <p>
              One thing to remember is that the meter price is the maximum price
              a taxi can charge but you can negotiate a lower price with the
              driver or the operator before your journey.
            </p>

            <h2>How to get the best price</h2>
            <p>
              Here are a few ways to get the best possible price for your taxi
              journey in Catterick.
            </p>
            <p>Ring a few different companies:</p>
            <p>
              Every driver has different discounts so you might be surprised how
              much you can save by ringing around and asking if other taxi
              companies can beat your current quote. Keep in mind there are four
              or five numbers in the garrison that all divert to the same taxi
              company but don't let the put you off.
            </p>
            <p>Bigger discounts on long distances</p>

            <p>
              If you are only travelling somewhere local there isn't to much
              room for discount but you should still get some. If you need a
              long distance taxi, some drivers base the price on time rather
              than distance but the same rules apply, the meter price is always
              the maximum.
            </p>

            <h2>Know your taxi</h2>
            <p>
              There are two types of car available for hire in Catterick and in
              this section I am going to explain the difference.
            </p>
            <p>Hackney carriage:</p>
            <p>
              A Hackney carriage vehicle ( Taxi ) has white license plates on
              the front and back of the vehicle and also on front doors on each
              side. This plate shows information about the taxi and how many
              passengers the vehicle is licensed to carry. A taxi also has a
              light on the roof. As a general rule if the light is on, this
              vehicle is available for hire. If the light is off, the vehicle is
              either occupied or the car is off shift.
            </p>
            <p>
              This vehicle can be hired by calling the operator of the vehicle
              and taxi's can also be hailed by customers on the street or pick
              customers up on local taxi ranks.
            </p>
            <p>Private hire:</p>
            <p>
              A private hire vehicle has yellow plates on the front and back and
              also on the front doors on each side. This plate should say
              advance bookings only and shows the license information of the
              vehicle. A private hire vehicle has no roof light and can only be
              hired through an operator. If you get in one of these cars and you
              have not booked it in advance through an operator you may not be
              covered by insurance.
            </p>
          </BlogPost>
          <HomeLink />
        </div>
      </Layout>
    </div>
  );
}
