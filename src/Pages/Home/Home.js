import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([]);
  const refs = useRef([]);
  const [isCarousel, setIsCarousel] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCarousel(window.innerWidth >= 768);
    };

    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      refs.current.forEach((ref, index) => {
        if (ref) {
          // Ensure ref is not null
          const rect = ref.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0 &&
            !animatedElements.includes(index)
          ) {
            setAnimatedElements((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [animatedElements]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const customerShowcaseItems = [
    {
      imgSrc:
        "https://res.cloudinary.com/dqoibnakh/image/upload/v1698169178/A30600050_nonwgc.jpg",
      altText: "Jimmy Cornelius",
      name: "Jimmy - 2023 Bayliner Element M17 Boat",
      testimonial:
        "Enjoying the Bayliner Element M17 on the water at Tampa Bay, FL",
      className: "image-1",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dqoibnakh/image/upload/v1698169607/A30688127_qmxpz1.jpg",
      altText: "Christine Knatz",
      name: "Christine - 2023 Yamaha Kodiak EPS 700 - Tactical Black",
      testimonial:
        "The 4 wheeler exceeded my expectations. From the handling to terrain it's truly an amazing machine. I love how easy it is to start, maneuver due to power steering to the ease of going into reverse. I can now go into trails with steep incline and use my winch to remove trees in my way.",
      className: "image-2",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dqoibnakh/image/upload/v1698169935/Danny_fviind.png",
      altText: "Danny Carr",
      name: "Danny - 2022 Ford EcoSport S",
      testimonial:
        "I am very happy with my EcoSport...At the dealership, I gave them my drivers license and insurance card, they gave me my Key! Easiest transaction ever",
      className: "image-3",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dqoibnakh/image/upload/v1698170114/Jimmy_g4borv.png",
      altText: "Jimmy Cornelius",
      name: "Jimmy - 2023 Ford F-150 Lariat 4x4 5.0L V8 - Agate White Metallic S",
      testimonial: "A beautiful day in Tampa, FL with my Ford F-150 Lariat 4X4",
      className: "image-4",
    },
  ];

  return (
    <div>
      <div className="home-section">
        <img
          src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697653393/ghscei35o2lourbtubg6.jpg"
          alt="Landrover"
          className="full-width-image"
        />
        <div className="home-text">
          <h1 className="home-heading">
            YOUR PERSONAL VEHICLE{" "}
            <span className="break-line">PROCUREMENT PARTNER</span>
          </h1>
          <p className="home-subheading">
            Simplifying the Journey<br></br>from Choice to Chassis
          </p>
        </div>
      </div>

      <div
        ref={(el) => (refs.current[0] = el)}
        className={`info-section ${
          animatedElements.includes(0) ? "fade-in-final" : "fade-in-initial"
        }`}
      >
        <div className="info-content">
          <h2 className="info-title">WHAT WE DO</h2>
          <p className="info-text">
            At TRV Auto Concierge, we specialize in sourcing and delivering a
            wide range of vehicles tailored to your preferences. With over five
            years in the industry, we're your trusted partner in procuring cars,
            recreational vehicles, boats, and motorcycles.
          </p>
        </div>
        <div className="info-content">
          <h2 className="info-title">WHAT WE PROCURE</h2>
          <p className="info-text">
            Your Dream Ride, Delivered: Whether you’re in the market for a sleek
            new car, a fun recreational vehicle, a sturdy boat, or a swift
            motorcycle, we've got you covered. Our extensive experience ensures
            you get the best deal on your desired vehicle.
          </p>
        </div>
        <div className="info-content">
          <h2 className="info-title">VEHICLE QUALITY ASSURANCE</h2>
          <p className="info-text">
            Ensuring your vehicle operates at peak performance is our top
            priority. At TRV Auto Concierge, our premier dealer management
            services and established dealer relationships ensure that your
            vehicle(s) are in optimal working condition.
          </p>
        </div>
        <div className="info-content">
          <h2 className="info-title">DELIVERY</h2>
          <p className="info-text">
            At TRV Auto Concierge, we strive to provide timely and efficient
            delivery by leveraging our extensive network to source your desired
            vehicle from nearby locations.
          </p>
        </div>
      </div>

      <div className="customer-showcase">
        <h2 className="showcase-title">OUR HAPPY CUSTOMERS</h2>
        {isCarousel ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            centerMode
            centerSlidePercentage={
              80
            } /* Adjust percentage to control the size of the images relative to the carousel container */
          >
            {customerShowcaseItems.map((item, index) => (
              <div className="showcase-item" key={index}>
                <div className="image-wrapper">
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                    className={`full-width-image-cs ${item.className}`}
                  />
                </div>
                <h3 className="customer-name">{item.name}</h3>
                <p className="customer-testimonial">"{item.testimonial}"</p>
              </div>
            ))}
          </Carousel>
        ) : (
          customerShowcaseItems.map((item, index) => (
            <div
              ref={(el) => (refs.current[index + 1] = el)}
              className={`showcase-item ${
                animatedElements.includes(index + 1)
                  ? "fade-in-final"
                  : "fade-in-initial"
              }`}
              key={index}
            >
              <div className="image-wrapper">
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className={`full-width-image-cs ${item.className}`}
                />
              </div>
              <h3 className="customer-name">{item.name}</h3>
              <p className="customer-testimonial">"{item.testimonial}"</p>
            </div>
          ))
        )}
        <div className="cta-section">
          <h2>Ready to find your perfect vehicle?</h2>
          <p>Get started today!</p>
          <div className="cta-links">
            <Link to="/services" className="cta-link">
              Services
            </Link>
            <Link to="/howitworks" className="cta-link">
              How It Works
            </Link>
          </div>
        </div>
        {showScrollButton && (
          <button onClick={scrollToTop} className="scroll-to-top">
            <img
              src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698237417/SeekPng.com_grey-png_2162589_irw3sb.png"
              alt="Scroll to top"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
