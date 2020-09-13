import Layout from "../components/layout/Layout";
import Hero from "../components/layout/Hero";
import HomeLink from "../components/HomeLink";
import styles from "../styles/Station.module.css";
import Link from "next/link";
export default function Station() {
  return (
    <div>
      <Layout
        title="Best price taxi from Catterick to Darlington station"
        description="Best taxi price from Catterick Garrison to Darlington or Northallerton train station."
        keywords="catterick to darlington, taxi to darlington, taxi to northallerton"
        canonical="https://sltaxicatterick.co.uk/station"
      >
        <Hero
          imgURL="stationhero"
          altText="Picture of a train at Darlington station"
          ext=".jpg"
        />
        <div className={styles.station}>
          <div className="content content-to-wide">
            <div className={styles.content}>
              <h1>Station transfers</h1>
              <p>
                Are you looking for a reliable taxi service to get you to the
                station?, you can count on us to get you there safely and on
                time.
              </p>
              <p>
                The closest train stations to Catterick garrison are
                Northallerton and Darlington, 15 and 17 miles away respectively.
                The journey time in a taxi to either is around 25 - 30 minutes
                in normal traffic.
              </p>
              <h2>Special offers</h2>
              <p>
                We can provide a taxi from Catterick garrison to Darlington or
                Northallerton station for the special offer price of £25 which
                is a saving of around £10 on the standard price. As the taxi
                price to either station is the same it might be worth comparing
                your train ticket prices from both stations, the price could be
                cheaper or the train may be more direct.
              </p>
              <p>
                If you would like a quote to any other station just give us a
                call, we are confident we can beat any local price. We also have
                some great{" "}
                <Link href="/airport">
                  <a className="inline-link">fixed airport taxi prices</a>
                </Link>
                .
              </p>
              <h2>Station pickups</h2>
              <p>
                If you are coming in to Darlington or Northallerton station and
                want to avoid the hassle of not being able to find a taxi, we
                would advise booking your taxi in advance and we can be waiting
                at the station when you arrive, a minimum of 25 minutes before
                your arrival time would be required but you can book as far in
                advance as you like.
              </p>
              <p>
                To book your taxi just give us a call on{" "}
                <a href="tel:01748883370">01748 883370</a> or if you prefer you
                can{" "}
                <a href="mailto:sltaxicatterick@gmail.com">send us an email</a>.
              </p>
              <p>
                Then just sit back relax and enjoy your journey, one of our cars
                will be waiting when you arrive and we'll send you a text
                message with the make and model of the car and the registration
                number so there is no stress locating your taxi.
              </p>
              <p>
                We accept all major credit cards and Contactless payments in
                every taxi so no need to worry about looking for the nearest
                cash point.
              </p>
              <h2>Is a taxi cheaper ?</h2>
              <p>
                If you are travelling with a few people you should always check
                the price of your train tickets combined with the price of your
                taxi to the station, we have very competitive long distance
                prices, you might be surprised to learn it can sometimes be much
                cheaper for you all to share a taxi straight to your
                destination.
              </p>
              <p>
                <span>
                  Check train times here
                  <a href="https://trainline.com" className="inline-link">
                    {" "}
                    trainline.com
                  </a>
                </span>
              </p>
              <HomeLink />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
