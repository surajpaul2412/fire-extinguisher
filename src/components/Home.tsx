import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Logos,
    ourServices,
    ourValue,
    projects,
    workWithUsUSP,
} from "../Constants/UIConstants";
import "../Styles/root.scss";
import Fireman from "../images/fire-man.png";
import FiremanTwo from "../images/fire-man-two.png";
import FireHelmet from "../images/fire-helmets.png";
import AboutOne from "../images/about-us-1.png";
import AboutTwo from "../images/about-us-2.png";
import MainButton from "./MainButton";
import FireExtinguisher from "../images/extinguisher.png";
import Group from "../images/group-of-people.png";
import FiremanMask from "../images/fireman-with-mask.png";

const Home = () => {
    return (
        <section className="home">
            <LogoCarousel />
            <Mission />
            <OurValue />
            <AboutUs />
            <WorkWithUs />
            <OurServices />
            <Projects />
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
        <div className="logos pb-100">
            <h5 className="text__center">
                Trusted by several brands and clients
            </h5>
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
        <div className="mission pb-100">
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

const OurValue = () => {
    return (
        <div className="our__value fluid__container pb-100">
            <div className="text__center heading">
                <h2 className="section__heading">
                    Our <span className="blue">value</span> and
                    <span className="blue"> commitment!</span>
                </h2>
                <p>
                    At Fire Masters, we're motivated and inspired every day by
                    how our customers use our products to secure their people
                    and business infrastructure
                </p>
            </div>

            <div className="our__value__row flex">
                {ourValue.map((value) => (
                    <div key={value.id}>
                        <img src={value.image} alt="" />
                        <h4>{value.title}</h4>
                        <p>{value.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AboutUs = () => {
    return (
        <section className="about__us">
            <div className="about__us__wrapper fluid__container flex">
                <div className="about__us__wrapper__left flex">
                    <img src={AboutOne} alt="" />
                    <img src={AboutTwo} alt="" />
                </div>
                <div className="about__us__wrapper__right">
                    <h2 className="section__heading ">
                        About <span className="blue">us!</span>
                    </h2>
                    <p>
                        <strong>
                            Fire Masters are closing on three decades of
                            experience in the fire protection industry.
                        </strong>
                        <br />
                        <br />
                        Fire Masters Ltd is a leading re and security systems
                        and services provider in Uganda, providing strategy,
                        implementation, and operational solutions for clients
                        managing the business and technology complexities.
                        <br />
                        <br />
                        We have grown out of the recognition that a successful
                        re and security solution must combine technical
                        expertise with keen business skills, Technology and the
                        ability to provide a rapid and focused response. Because
                        of the varying demands placed on the market, Fire
                        Masters Ltd are specialists in the provision of turnkey
                        Solutions. <br />
                        <br />
                        We at Fire Masters Limited have been in business since
                        1995. We are a fire protection engineering company,  we
                        design, supply, install and maintain high-quality fire
                        protection and fire fighting systems. We also undertake
                        to design both security and safety systems and
                        equipment.
                    </p>
                    <MainButton buttonName="Get in Touch" onClick={() => {}} />
                </div>
            </div>
        </section>
    );
};

const WorkWithUs = () => {
    return (
        <section className="work__with__us mt-100 fluid__container">
            <div className="text__center heading">
                <h2 className="section__heading ">
                    Why <span className="blue">work</span> with us?
                </h2>
                <p>
                    To deliver re and safety solutions that meet our customers’
                    requirements and exceed their expectations. we shall do this
                    by bringing together our experience and that of our global
                    partners. We shall differentiate ourselves
                </p>
            </div>
            <div className="flex work__with__us__images ">
                <img src={FireExtinguisher} alt="" />
                <img src={Group} alt="" />
                <img src={FiremanMask} alt="" />
            </div>
            <div className="work__with__us__usp flex  text__center">
                {workWithUsUSP.map((usp) => (
                    <div key={usp.text}>
                        <img src={usp.image} alt="" />
                        <p>{usp.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const OurServices = () => {
    const [serviceImageUrl, setServiceImageUrl] = useState("");

    const onMouseHover = (url: string) => {
        setServiceImageUrl(url);
    };
    return (
        <section className="our__services fluid__container pb-100">
            <div className="text__center heading">
                <h2 className="section__heading ">
                    Our <span className="blue">Services</span>
                </h2>
                <p>
                    To deliver re and safety solutions that meet our customers’
                    requirements and exceed their expectations. we shall do this
                    by bringing together our experience and that of our global
                    partners
                </p>
            </div>

            <div className="our__services__list flex">
                <ul>
                    {ourServices.map((service) => (
                        <li
                            onMouseEnter={() => onMouseHover(service.image)}
                            key={service.text}
                        >
                            <service.icon />
                            {service.text}
                        </li>
                    ))}
                </ul>
                <img src={serviceImageUrl} alt="" />
            </div>
        </section>
    );
};

const Projects = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
    };
    return (
        <section className="projects">
            <div className="projects__wrapper flex fluid__container">
                <div className="heading">
                    <h2 className="section__heading ">
                        <span className="blue">Our</span> Major Projects
                        <span className="blue"> Executed!</span>
                    </h2>
                    <p>
                        To deliver re and safety solutions that meet our
                        customers’ requirements and exceed their expectations.
                        we shall do this by bringing together our experience and
                        that of our global partners
                    </p>
                    <MainButton buttonName="Get in Touch" onClick={() => {}} />
                </div>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div
                            className="flex projects__wrapper__project"
                            key={project.text}
                        >
                            <img src={project.image} alt="" />
                            <h5>{project.text}</h5>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
export default Home;
