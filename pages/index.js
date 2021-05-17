import Link from "next/link";
import styles from "../styles/homepage/Home.module.css";
import Layout from "../components/layout/Layout";
import Perks from "../components/homepage/Perks";
import Header from "../components/header";
import PictureRow from "../components/PictureRow";
import Image from 'next/image';

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
        description="Superb taxi service in Catterick garrison, Unbeatable prices, Unrivalled service, serving Catterick, Colburn, Scotton and surrounding areas, Catterick to Darlington"
        keywords="taxi catterick, taxi catterick garrison, taxis, taxi colburn"
        canonical="https://sltaxicatterick.co.uk"
        schema={schema}
      >
      <Header
        title1='Cattericks Best'
        title2='Taxi Service'
        intro='Professional, Independent taxi service in Catterick
                  garrison, serving the Catterick, Scotton, Colburn area. We
                  pride ourselves on exceptional service and going the extra
                  mile for our customers.'
      />
       

        <section className={styles.about}>
        
          <div className="content">
            <div className={styles.layout}>
            <div className={styles.aboutText}>
                <h2>
                  About us
                </h2>
                <p>
                  We are an independent taxi service serving Catterick and the surrounding areas. If you are looking a Reliable, Professional taxi service you are in the right place. With SLTaxi you book directly with your taxi driver, cutting out the middle man and saving you money.
                </p>
                <p>
                  Our taxis are maintained to the highest standards and we are fully licensed and DBS checked so whereever you need to go, you can rely on our experienced drivers to get you there in comfort and safety. Check out some of our excellent five star reviews to see what our customers say.
                </p>
            </div>
              <Perks />
              </div>            
          </div>
      
        </section>

       
        

      <section className={styles.airportTransfers}>
        <div>
        <PictureRow 
          imgURL='airport.jpg'
          height={400}
          width={750}
          altText='picture of a plane landing at an airport'
          reverse={false}
        >
        <div>
              <h2>Airport transfers</h2>
              <p>
                We specialise in{" "}
                <Link href="/airport">
                  <a className="inline-link">Airport transfers</a>
                </Link>{" "}
                so whether you are travelling for business or going on holiday
                you can count on our first class service to get you there in
                for the best price, in comfort and on time.
              </p>
              <p>
                {" "}
                We can take you from Catterick to any UK airport, from Newcastle
                Airport (NCL) to London Heathrow (LHR) we have some excellent
                long distance taxi prices. We also have free customer wifi in our taxi to keep you
                entertained on your journey. Call us today for a no obligation
                quote.
              </p>
            </div>
        </PictureRow>
        </div>
        <div className={styles.stationTransfers}>
        <PictureRow 
          imgURL='station.jpg'
          height={400}
          width={750}
          altText='picture of a plane landing at an airport'
          reverse={true}
        >
            <div>
              <h2>Station transfers</h2>
              <p>
                Get Unbeatable taxi prices on
                <Link href="/station">
                  <a className="inline-link"> station transfers </a>
                </Link>
                from Catterick garrison, We provide taxis from Catterick to Darlington and Northallerton station and have some great prices, call for your quote today.
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
          </div>
        </section>
        <section id="safeTaxi" className={styles.safeTaxi}>
        <PictureRow 
          imgURL='screen.jpg'
          height={400}
          width={750}
          altText='picture of the safety screen in our taxi'
          reverse={true}
        >
              <h2>Travel safe with us</h2>
              <p>
                The safety of passengers and driver are our number 1 priority
                and we have taken extra measures to keep everyone safe. We are
                currently only taking a maximum of 3 passengers per journey.
              </p>

              <p>
                We have fitted the best available safety screen that seperates the front and back of the taxi and we are sanitizing all surfaces between every customer. We also have hand gel available for customers and we encourage use of contactless payments where possible.
              </p>
            
         </PictureRow>
         
          <div className='content'>
          <div className={styles.extras}>
            <div>
              <h3>Face masks</h3>
              <p>
                  Face masks are required to be worn in every taxi unless you
                  are exempt. If you require a face mask we can provide you with
                  a brand new disposable one, just ask your driver.
              </p>
            </div>
            <div>
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
        <PictureRow 
          imgURL='car.jpg'
          height={400}
          width={750}
          altText='picture of our taxi'
          reverse={true}
        >
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
          </PictureRow>
        </section>
       
      </Layout>
    </div>
  );
}
