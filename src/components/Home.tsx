import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Logos } from "../Constants/UIConstants";
import "../Styles/root.scss";
import Fireman from "../images/fire-man.png";
import FiremanTwo from "../images/fire-man-two.png";
import FireHelmet from "../images/fire-helmets.png";

const Home = () => {
    return (
        <section className="home">
            <LogoCarousel />
            <Mission />
        </section>
    );
};

const LogoCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div>
            <h4 className="text__center">
                Trusted by several brands and clients
            </h4>
            <Slider {...settings}>
                {Logos.map((logo) => (
                    <img className="slider__logos" src={logo.image} alt="" />
                ))}
            </Slider>
        </div>
    );
};

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission__row__one">
                <img src={FireHelmet} alt="Fireman" />
                <div className="mission__row__one__text flex flex-col blueBg">
                    <h3>OUR MISSION</h3>
                    <p>
                        To deliver Fire and security solutions that meet our
                        customers’ requirements and exceed their expectations.
                        We shall do this by bringing together our own experience
                        and that of our global partners. <br />
                        <br />
                        ‘We shall differentiate our selves by not just being a
                        supplier, but by being a long-term partner.’
                    </p>
                </div>
            </div>
            <div className="mission__row__two flex">
                <div className="mission__row__one__text blueBg flex flex-col">
                    <h3>OUR VISION</h3>
                    <p>
                        To be the leading provider of fire and security
                        solutions in East Africa
                    </p>
                </div>
                <img src={Fireman} alt="Fireman" />
                <img src={FiremanTwo} alt="Fireman" />
            </div>
        </div>
    );
};

export default Home;
