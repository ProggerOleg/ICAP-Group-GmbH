import React from "react";
import baner from "../images/fst_image.jpg";
import ProductCard from "../components/ProductCard";
import one from "../images/small_img.png";
import two from "../images/small_img2.png";
import three from "../images/small_image3.png";
import four from "../images/small_img4.png";
import five from "../images/small_img5.png";
import six from "../images/small_img6.png";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.png";
import thirdImage from "../images/3.jpg";
import fourthImage from "../images/4.jpg";
import fivesImage from "../images/5.png";
import bloquote from "../images/bloqote.svg";

const Home = () => {
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row align-items-center bg-white py-5 first_block">
            <div className="col-7">
              <div className="main-banner position-relative">
                <img src={baner} alt="" className="img-fluid" />
                <div className="main-banner-content position-absolute text-white">
                  <h3 className="">ICAP Group GmbH</h3>
                  <h4 className="text-center p-1">
                    "Wir bringen Untehtrnehmen <br /> ins digitale Zeitalter!"
                  </h4>
                  <ul className="main-banner points pt-4">
                    <li>IOS &amp; Android App-Entwicklung</li>
                    <li>Info-Webseiten</li>
                    <li>Web-Solutions</li>
                    <li>Datenbanken &amp; Cloud Erstellung/Management</li>
                    <li>Einrichtung von Workstations</li>
                    <li>Datenschutz &amp; Compliance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5">
              <h1 className="heading-icons pb-4">Our Services</h1>
              <div className="icons d-flex gap-15 flex-row flex-wrap justify-content-between">
                <img src={one} className="img-fluid w-25" alt="..."></img>
                <img src={two} className="img-fluid w-25" alt="..."></img>
                <img src={three} className="img-fluid w-25" alt="..."></img>
                <img src={four} className="img-fluid w-25" alt="..."></img>
                <img src={five} className="img-fluid w-25" alt="..."></img>
                <img src={six} className="img-fluid w-25" alt="..."></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <figure className="text-center rounded-3 bg-white py-5 second_block position-relative">
                <img
                  src={bloquote}
                  alt="bloquote"
                  className="bloquote position-absolute"
                />
                <blockquote className="blockquote">
                  <p>Opportunities don't happen, you create them.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Source Title">Chris Grosser</cite>
                </figcaption>
                <img
                  src={bloquote}
                  alt="bloquote"
                  className="bloquote2 position-absolute"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper py-4 card_block">
        <div className="container-xxl">
          <div className="row">
            <h4 className="heading pb-5 text-center">Our Projects</h4>
            <ProductCard
              image={firstImage}
              id={1}
              title="Web development"
              text="Willkommen bei unserer Firma, Ihrem One-Stop-Lösungsanbieter für alle Webanforderungen. Wir bieten maßgeschneiderte digitale Lösungen, die Ihr Geschäft in den Vordergrund bringen. Verlassen Sie sich auf unsere Erfahrung und Innovation.!"
            />
            <ProductCard
              id={2}
              image={secondImage}
              title="Modile development"
              text="Erweitern Sie Ihre Reichweite mit unseren maßgeschneiderten mobilen Anwendungen. Wir entwerfen und entwickeln Apps, die den Bedürfnissen Ihres Unternehmens gerecht werden und Ihren Kunden ein überzeugendes mobiles Erlebnis bieten."
            />

            <ProductCard
              id={4}
              image={fourthImage}
              title="Quotely Wallpapers"
              text="Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos."
            />
            <ProductCard
              id={5}
              image={fivesImage}
              title="Super Easy CRM"
              text="Super Easy CRM: Plattform zur Rationalisierung von Verkaufs- und Kundendienstprozessen."
            />
            <ProductCard
              id={3}
              image={thirdImage}
              title="Database solutions"
              text="Optimieren Sie Ihre Datenverwaltung mit unseren individuell angepassten Datenbanklösungen. Unsere Experten entwickeln sichere und effiziente Datenbanksysteme, die Ihre Geschäftsprozesse unterstützen und verbessern."
            />
            <ProductCard
              id={3}
              image={thirdImage}
              title="Database solutions"
              text="Optimieren Sie Ihre Datenverwaltung mit unseren individuell angepassten Datenbanklösungen. Unsere Experten entwickeln sichere und effiziente Datenbanksysteme, die Ihre Geschäftsprozesse unterstützen und verbessern."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
