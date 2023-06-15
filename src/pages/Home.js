import React from "react";
import baner from "../images/fst_image.jpg";
import ProductCard from "../components/ProductCard";
// import one from "../images/1.jpg";
import one from "../images/small_img.png";
import two from "../images/small_img2.png";
import three from "../images/small_image3.png";
import four from "../images/small_img4.png";
import five from "../images/small_img5.png";
import six from "../images/small_img6.png";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.png";

const Home = () => {
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row align-items-center bg-white py-5 first_block">
            <div className="col-7">
              <div className="main-banner position-relative">
                <img src={baner} alt="" className="img-fluid rounded-3" />
                <div className="main-banner-content position-absolute text-white">
                  <h3 className="">ICAP Group GmbH</h3>
                  <h4>
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
      <section className="home-wrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <h4 className="heading pb-5 text-center">Our Projects</h4>
            <ProductCard image={firstImage} />
            <ProductCard image={secondImage} />
            <ProductCard image={secondImage} />
            <ProductCard image={secondImage} />
            <ProductCard image={secondImage} />
            <ProductCard image={secondImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
