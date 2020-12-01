import Layout from "../components/layout/Layout";
import HomeLink from "../components/HomeLink";
import Link from "next/link";
import Header from '../components/header';
import styles from '../styles/station.module.css';

const schema = {
  "@context": "http://schema.org",
  "@type": "Product",
  name: "Station transfers",
  image: "https://sltaxicatterick.co.uk/imgs/stationhero.jpg",
  description: "Catterick garrison to Darlington or Northallerton station",
  url: "https://sltaxicatterick.co.uk/station",
  brand: {
    "@type": "Brand",
    name: "SLTaxi",
    logo: "/imgs/logo3.png",
  },
  offers: {
    "@type": "Offer",
    price: "£25",
  },
};

export default function Station() {
  return (
    <div>
      <Layout
        title="Best price taxi from Catterick to Darlington station"
        description="Best taxi prices from Catterick Garrison to Darlington or Northallerton train station."
        keywords="catterick to darlington, taxi to darlington, taxi to northallerton"
        canonical="https://sltaxicatterick.co.uk/station"
        schema={schema}
      >
       <Header 
         title1="Best Price"
         title2="Station transfers"
         intro="We have the best taxi prices in Catterick garrison. Our taxis are maintained to the highest
                standards, we are confident you won't find the same level of
                service anywhere else."
       />
        
          <section className={styles.intro}>
            <div className='content-narrow'>
            <h2>Need a taxi to the Station?</h2>
            <p>
              We have superfast wifi and charging facilites in every taxi so
              wherever you need to go you can rely on us to get you there
              safely, in comfort and on time. If you would like to book call{" "}
              <a className="inline-link" href="tel:01748883370">
                01748 883370.
              </a>
            </p>
            <p>
              The closest train stations to Catterick garrison are
              Northallerton and Darlington, 15 and 17 miles away respectively.
              The journey time in a taxi to either is around 25 - 30 minutes
              in normal traffic.
            </p>
            </div>
          </section>
          <section className={styles.specialOffers}>
          <div className='content-narrow'>
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
              </div>
              </section>

              <section className={styles.stationPickups}>
              <div className='content-narrow'>
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
              </div>
              </section>
              <section className={styles.airportTransfers}>
              <div className='content-narrow'>
              <h2>Airport transfers</h2>
              <p>
                We also have unbeatable{" "}
                <Link href="/airport">
                  <a className="inline-link">Airport tranfer</a>
                </Link>{" "}
                prices, if you are travelling from Catterick to Newcastle (NCL),
                Leeds Bradford (LBA) or Manchester (MCN) Airport why not ask us
                for a no obligation quote.
              </p>
              <h3>Is a taxi cheaper ?</h3>
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
              </section>
           
      
      </Layout>
    </div>
  );
}
