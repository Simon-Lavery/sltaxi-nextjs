import Layout from "../components/layout/Layout";
import Hero from "../components/layout/Hero";
import HomeLink from "../components/HomeLink";
import styles from "../styles/Airport.module.css";
import Link from "next/link";

const schema = {
  "@context": "https://schema.org/",
  "@type": "TaxiService",
  provider: {
    "@type": "LocalBusiness",
    name: "SLTaxi Catterick garrison",
    location: {
      "@type": "place",
      areaServed: "Catterick garrison",
    },
    telephone: "01748 883370",
    image: "https://sltaxicatterick.co.uk/imgs/googlecover.jpg",
    logo: "https://sltaxicatterick.co.uk/imgs/logo3.png",
    slogan: "Unbeatable prices, Unrivalled service",
  },
  providerMobility: "dynamic",
};

export default function Airport() {
  return (
    <div>
      <Layout
        title="Airport transfers - Catterick Garrison | SLTaxi - 01748 883370"
        description="Best price airport transfers from Catterick Garrison to Newcastle, leeds or any UK airport. Get the best price and service from us."
        keywords="taxi catterick, airport transfers, catterick to newcastle, catterick to leeds"
        canonical="https://sltaxicatterick.co.uk/airport"
        schema={schema}
      >
        <Hero
          imgURL="airporthero"
          altText="Picture of a plane landing at an airport"
          ext=".jpg"
        />
        <div className={styles.airport}>
          <div className="content content-to-wide">
            <h1>Airport transfers</h1>
            <p>
              Are you going on holiday or travelling for business?, need a taxi
              to the airport. We specialise in taxis to or from any UK airport
              so why worry about parking or leaving your car when you could get
              a taxi for cheaper than you might think.
            </p>
            <p>
              Our taxis are maintained to the highest standards and we also
              provide customer wifi and phone charging facilities in every taxi.
              So where ever you need to go, you can trust to get you there
              safely, in comfort and on time.
            </p>
            <p>
              We have unbeatable fixed price fares from Catterick to Newcastle
              Airport (NCL), Leeds Bradford Airport (LBA) or Manchester Airport
              (MCN) and we are confident that our airport taxi prices are the
              best in the Catterick area so if you have a quote already, lets
              see if we can beat it. We would recommend booking your airport
              transfer in advance if possible to guarantee availability.
            </p>
            <h2>Relax</h2>
            <p>
              When you book an airport transfer with SLTaxi, we can monitor your
              flight schedule and adjust your pick up time if we need to so you
              can relax knowing your taxi will be waiting when you arrive. We
              have lots of luggage space, enough for 3 - 4 large suitcases. We
              also have free super fast wifi in our taxi to keep you entertained
              on your way to the airport. For a no obligation quote just give us
              a call on{" "}
              <a href="tel:01748 883370" className="inline-link">
                01748 883370
              </a>{" "}
              or if you prefer you can email us at{" "}
              <a
                href="mailto:sltaxicatterick@gmail.com"
                className="inline-link"
              >
                sltaxicatterick@gmail.com
              </a>
              .
            </p>
            <h2>Taxi to the station</h2>
            <p>
              If you need to catch a train to the Airport we have the best price{" "}
              <Link href="/station">
                <a className="inline-link">station transfers</a>
              </Link>{" "}
              in the Catterick garrison area. Get a taxi to Darlington or
              Northallerton station for just £25, or if you need a taxi to any
              other station, call us for a quote.
            </p>

            <HomeLink />
          </div>
        </div>
      </Layout>
    </div>
  );
}
