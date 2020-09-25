import Head from "next/head";
import Link from "next/link";
import styles from "../styles/homepage/Home.module.css";
import Layout from "../components/layout/Layout";
import Hero from "../components/layout/Hero";
import Banner from "../components/homepage/Banner";
import Perks from "../components/homepage/Perks";
import Offer from "../components/homepage/Offer";
import Picture from "../components/Picture";
import PictureRow from "../components/PictureRow";

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

export default function Home() {
  return (
    <div>
      <Layout
        title="Taxi service - Catterick Garrison | SLTaxi - 01748 883370"
        description="Superb taxi service in Catterick garrison, Unbeatable prices, Unrivalled service, serving Catterick, Colburn, Scotton and surrounding areas, Catterick to Darlington £25"
        keywords="taxi catterick, taxi catterick garrison, taxis, taxi colburn"
        canonical="https://sltaxicatterick.co.uk"
        schema={schema}
      >
        <Hero imgURL="googlecover" altText="picture of out taxi" ext=".jpg" />
        <Banner info="Please note: We have some extra measures to keep passengers safe">
          <Link href="/#safeTaxi">
            <a>find out more</a>
          </Link>
        </Banner>

        <section className={styles.about}>
          <div className="content">
            <div className="desktop-row">
              <div className={styles.textBlock}>
                <h1>
                  Professional <br className="mobile-line-break" /> Reliable
                  Taxis
                </h1>
                <p>
                  We are a Professional, Independent taxi service in Catterick
                  garrison, serving the Catterick, Scotton, Colburn area. We
                  pride ourselves on exceptional service and going the extra
                  mile for our customers. Our taxis are maintained to the
                  highest standards and we are fully licensed and DBS checked.
                </p>
                <p>
                  If you need a taxi for a night out, business trip, airport
                  transfer or shopping trip we won't be beaten on price or
                  service so give us a call and see for yourself.
                </p>
              </div>

              <Perks />
            </div>
          </div>
        </section>
        <section className={styles.currentOffers}>
          <div className="content">
            <div className="desktop-row">
              <div className={styles.textBlock}>
                <h2>Current offers</h2>
                <p>
                  Our offers change all the time so check back regularly, also
                  feel free to leave us an{" "}
                  <a
                    href="mailto:sltaxicatterick@gmail.com"
                    className={styles.inlineLink}
                  >
                    email
                  </a>{" "}
                  for the kind of offers you would like to see in the future. We
                  are confident we have the best taxi prices in the Catterick
                  area so why on give us a call and see if we can beat you
                  current quote.
                </p>
                <p>
                  To book a taxi using any of our offers just call us on{" "}
                  <a href="tel:01748 883370" className={styles.inlineLink}>
                    01748 883370
                  </a>
                  , the price is applied automatically on all phone bookings.
                  And for all other journeys, challenge us to beat your current
                  taxi quote, we are confident we can beat any local price.
                </p>
              </div>
              <Offer
                description="Taxi from Catterick garrison to Darlington or Northallerton town center or station for a maximum fare of £25."
                imgURL="£25-darlington"
              />

              <Offer
                description="This offer is valid for any journey within the Garrison, Scotton and Colburn. One pick up and drop off."
                imgURL="dl9-offer"
              />
            </div>
          </div>
        </section>
        <section className={styles.airportTransfers}>
          <PictureRow>
            <Picture
              imgURL="airport"
              altText="Picture of an aeroplane landing at an airport"
            />
            <div className="content">
              <h2>Airport transfers</h2>
              <p>
                We specialise in{" "}
                <Link href="/airport">
                  <a className="inline-link">Airport transfers</a>
                </Link>{" "}
                so whether you are travelling for business or going on holiday
                you can count on our first class service to get you there in
                comfort and on time.
              </p>
              <p>
                {" "}
                We can take you from Catterick to any UK airport, from Newcastle
                Airport (NCL) to London Heathrow (LHR) we have some excellent
                long distance prices. We also have wifi in our taxi to keep you
                entertained on your journey. Call us today for a no obligation
                quote.
              </p>
            </div>
          </PictureRow>
        </section>
        <section id="safeTaxi" className={styles.safeTaxi}>
          <PictureRow reverse={true}>
            <Picture
              imgURL="screen"
              altText="Picture of our passenger safety screen"
            />
            <div>
              <h2>Travel safe</h2>
              <p>
                As we have a safety screen fitted to allow for social distancing
                we are currently limited to a maximum of 3 passengers per
                journey. Extra measures we have in place to keep customers safe
                include:
              </p>
              <ul>
                <li>Screen fitted between driver and passengers</li>
                <li>Hand gel for customers</li>
                <li>Contactless payment available in every taxi</li>
                <li>Touch points cleaned every journey</li>
                <li>Car deep cleaned after every shift</li>
              </ul>
            </div>
          </PictureRow>
          <div className="content">
            <div className={styles.extras}>
              <div className={styles.textBlock}>
                <h3>Face masks</h3>
                <p>
                  Face masks are required to be worn on every journey unless you
                  are exempt. If you require a face mask we can provide you with
                  a brand new disposable mask, just ask the driver.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h3>Any other concerns</h3>
                <p>
                  We are doing everything possible to make your taxi journey
                  safe, if you need any more information feel free to send us an{" "}
                  <a
                    href="mailto:sltaxicatterick@gmail.com"
                    className={styles.inlineLink}
                  >
                    email
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.greatService}>
          <PictureRow>
            <Picture imgURL="carinterior" altText="Picture of our taxi" />
            <div>
              <h2>Great service</h2>
              <p>
                Looking for the premier taxi service in Catterick garrison, our
                taxis are maintained to the highest possible standards, so where
                ever need to go you can be sure to have a relaxing, safe and
                comfortable journey.
              </p>
              <p>
                We accept Card or Contactless payments in every taxi so no need
                to worry about carrying cash. We also superfast customer wifi
                and charging facilities to keep you entertained on your journey.
                Check out some of our five star reviews and see what our
                customers think.
              </p>
            </div>
          </PictureRow>
        </section>
        <section className={styles.stationTransfers}>
          <PictureRow reverse={true}>
            <Picture
              imgURL="station"
              altText="Picture of a train at the platform in Darlington station"
            />
            <div>
              <h2>Station transfers</h2>
              <p>
                Get Unbeatable taxi prices on
                <Link href="station">
                  <a className="inline-link"> station transfers </a>
                </Link>
                from Catterick garrison, We currently have a special offer, taxi
                for 1-4 passengers from Catterick garrison to Darlington station
                or Northallerton station for the special offer price of £25.
                This offer is also valid if you need a taxi from Darlington or
                Northallerton to Catterick.
              </p>
              <p>
                We would advise booking in advance to guarantee availablity.{" "}
              </p>
              <p>
                To book call{" "}
                <a href="tel:01748 883370" className="inline-link">
                  01748 883370
                </a>
                .
              </p>
            </div>
          </PictureRow>
        </section>
      </Layout>
    </div>
  );
}
