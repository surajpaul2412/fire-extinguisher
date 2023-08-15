import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Formik, Field, Form, FormikHelpers } from "formik";

import {
    Logos,
    footerMenu,
    getInTouch,
    headerMenu,
    heroNumbers,
    ourServices,
    ourValue,
    posts,
    projects,
    socialLinks,
    workWithUsUSP,
} from "../Constants/UIConstants";
import "../Styles/root.scss";
import Fireman from "../images/fire-man.png";
import FiremanTwo from "../images/fire-man-two.png";
import FireHelmet from "../images/unity.webp";
import AboutOne from "../images/about-us-1.png";
import AboutTwo from "../images/about-us-2.png";
import MainButton from "./MainButton";
import FireExtinguisher from "../images/extinguisher.png";
import Group from "../images/group-of-people.png";
import FiremanMask from "../images/fireman-with-mask.png";

import Arrow from "../images/arrow.svg";
import Logo from "../images/fire-masters-logo.png";
import HeroFirefighter from "../images/hero-firefighter.png";

import FireProtection from "../images/Fireprotection.png";
import Extinguishers from "../images/extinguishers.png";
import RandomProduct from "../images/random-product.png";
import WaterPipe from "../images/water-pipe.png";
import WaterPipeRed from "../images/water-pipe-red.png";
import IconDivider from "../Icons/IconDivider";
import IconHamburger from "../Icons/IconHamburger";
import IconClose from "../Icons/IconClose";

import Certificate from "../images/IFE Certification.webp";
import CertificateIcon from "../images/certificate-icon.svg";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    message: string;
    subjects: "general inquiry" | "basic";
}

const Home = () => {
    return (
        <section className="home">
            <Header />
            <Hero />
            <LogoCarousel />
            <Mission />
            <OurValue />
            <AboutUs />
            <WorkWithUs />
            <Products />
            <OurServices />
            <Projects />
            <Certification />
            <InquiryForm />
            <IconDivider />
            <Footer />
        </section>
    );
};

const LogoCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
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
                <div>
                    <div className="mission__row__one__text flex flex-col blueBg">
                        <h3>OUR MISSION</h3>
                        <p>
                            Closing on Three decades, Fire Masters Limited has
                            been the trailblazer in providing Fire protection
                            engineering services to serve the needs of thousands
                            of Ugandans.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mission__row__two flex">
                <div>
                    <div className="mission__row__one__text blueBg flex flex-col">
                        <h3>OUR VISION</h3>
                        <p>
                            Since 1995, the Company has been operated under its
                            current administration and has grown into a one-stop
                            shop for specialised Fire Protection Equipment &
                            Services.
                        </p>
                    </div>
                </div>

                <div>
                    <img src={Fireman} alt="Fireman" />
                    <img src={FiremanTwo} alt="Fireman" />
                </div>
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
                        Fire Masters Ltd is a leading fire and security systems
                        and services provider in Uganda, providing strategy,
                        implementation, and operational solutions for clients
                        managing the business and technology complexities.
                        <br />
                        <br />
                        We have grown out of the recognition that a successful
                        fire and security solution must combine technical
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
                    <MainButton />
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
    const [serviceImageUrl, setServiceImageUrl] = useState(FireProtection);

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
                    <MainButton />
                </div>
                {/* <Slider {...settings}>
                    {projects.map((project) => (
                        <div
                            className="flex projects__wrapper__project"
                            key={project.text}
                        >
                            <img src={project.image} alt="" />
                            <h5>{project.text}</h5>
                        </div>
                    ))}
                </Slider> */}

                <div class="container-slider">
                    <section class="gallery">
                        {projects.map((project) => (
                            <div
                                className="flex projects__wrapper__project"
                                key={project.text}
                            >
                                <img src={project.image} alt="" />
                                <h5>{project.text}</h5>
                            </div>
                        ))}
                        {projects.map((project) => (
                            <div
                                className="flex projects__wrapper__project"
                                key={project.text}
                            >
                                <img src={project.image} alt="" />
                                <h5>{project.text}</h5>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const scrollTop = () => {
        const rootElement = document.documentElement;
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer>
            <div className="flex footer__first__row">
                <div className="footer__first__row__left">
                    <img src={Logo} alt="Fire masters logo" />
                    <p>Leading the fight against Fire</p>
                </div>
                <button onClick={scrollTop} className="flex">
                    Go to top <img src={Arrow} alt="arrow" />
                </button>
            </div>

            <div className="flex footer__second__row">
                <ul className="footer__second__row__menu">
                    {footerMenu.map((menu) => (
                        <li key={menu.text}>
                            <a href={menu.link}>{menu.text}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    {`© ${currentYear} All rights reserved by Fire Masters Ltd.`}
                </div>
            </div>
        </footer>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__wrapper fluid__container flex">
                <div className="hero__wrapper__left">
                    <h1>
                        <span className="blue"> Ensuring Your Safety,</span>
                        <br />
                        Protecting Lives, <br />
                        <span className="blue">with Fire Masters!</span>
                    </h1>

                    <MainButton />
                    <div className="flex hero__wrapper__left__numbers">
                        {heroNumbers.map((number) => (
                            <div key={number.number}>
                                <span>{number.number}</span>
                                <p>{number.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={HeroFirefighter} alt="firefighter" />
            </div>
        </section>
    );
};

const Header = () => {
    return (
        <header className="flex">
            <img src={Logo} alt="Fire masters logo" />
            <div className="header__desktop">
                <ul>
                    {headerMenu.map((menu) => (
                        <li key={menu.text}>
                            <a href={menu.link}>{menu.text}</a>
                        </li>
                    ))}
                </ul>
                <MainButton />
            </div>

            <div className="header__mobile">
                <MobileHeader />
            </div>
        </header>
    );
};

const MobileHeader = () => {
    const onToggleMenu = (isClose = false) => {
        const mobileMenuWrapper = document.querySelector(
            ".mobile__menu__wrapper__in"
        );
        if (mobileMenuWrapper && !isClose) {
            mobileMenuWrapper.classList.add("show");
            mobileMenuWrapper.classList.remove("hide");
            document.body.classList.add("stop__overflow");
        } else if (mobileMenuWrapper) {
            mobileMenuWrapper.classList.add("hide");
            mobileMenuWrapper.classList.remove("show");
            document.body.classList.remove("stop__overflow");
        }
    };

    return (
        <>
            <div onClick={() => onToggleMenu()}>
                <IconHamburger />
            </div>
            <div className="mobile__menu__wrapper">
                <div className="mobile__menu__wrapper__in hide">
                    <ul>
                        {headerMenu.map((menu) => (
                            <li key={menu.text}>
                                <a href={menu.link}>{menu.text}</a>
                            </li>
                        ))}
                    </ul>
                    <IconClose onClick={() => onToggleMenu(true)} />
                </div>
            </div>
        </>
    );
};

const Products = () => {
    const productsTabs = [
        {
            tabName: "Extinguishers",
            products: [
                {
                    image: Extinguishers,
                    title: "Fire Extinguisher",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: RandomProduct,
                    title: "Random Product",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Detection Systems",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Water Systems",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Fire Suppression",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Fire Training",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Security Systems",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
        {
            tabName: "Safety Equipment",
            products: [
                {
                    image: RandomProduct,
                    title: "Cow",
                    desc: "",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
                {
                    image: WaterPipe,
                    title: "Water pipe",
                    desc: "Randm text somewhere",
                    weight: "3 kg 500g",
                    dimensions: "35.6 x 11.4 x 35.6 cm",
                    components: "1 Abc type fire extinguisher",
                },
            ],
        },
    ];
    return (
        <section className="products fluid__container pb-100">
            <div className="text__center heading">
                <h2 className="section__heading ">
                    Our <span className="blue">Product</span> line <br />
                </h2>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        {productsTabs.map((product) => (
                            <Tab>{product.tabName}</Tab>
                        ))}
                    </TabList>
                    {productsTabs.map((product) => (
                        <TabPanel className="products__tabpanel flex">
                            {product.products.map((productContent, index) => (
                                <div
                                    key={index}
                                    className="products__tabpanel__product"
                                >
                                    <img src={productContent.image} alt="" />
                                    <div className="products__tabpanel__product__overlay">
                                        <h5>{productContent.title}</h5>
                                        <p>{productContent.desc}</p>
                                        <ul>
                                            <li>
                                                <span>Weight</span>
                                                <span>
                                                    {productContent.weight}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Dimensions</span>
                                                <span>
                                                    {productContent.weight}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Components</span>
                                                <span>
                                                    {productContent.weight}
                                                </span>
                                            </li>
                                        </ul>
                                        <button>Inquire</button>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

const InquiryForm = () => {
    return (
        <section
            id="get-in-touch"
            className="inquiry__form flex fluid__container mt-100"
        >
            <div className="inquiry__form__left">
                <h3>Get in touch</h3>
                <p>We are happy to help you!</p>
                <ul>
                    {getInTouch.map((touch) => (
                        <li className="flex" key={touch.number}>
                            <img src={touch.icon} alt="" />
                            {touch.number}
                        </li>
                    ))}
                </ul>
                <div className="inquiry__form__left__social flex">
                    {socialLinks.map((link) => (
                        <a href={link.link}>
                            <img src={link.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    number: "",
                    subjects: "general inquiry",
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className="inquiry__form__formWrapper">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="mobile">Phone number</label>
                        <Field id="mobile" name="mobile" type="tel" />
                    </div>

                    <div
                        className="radio__group"
                        role="group"
                        aria-labelledby="my-radio-group"
                    >
                        <h5>Select subject</h5>
                        <div>
                            <label>
                                <Field
                                    type="radio"
                                    name="subject"
                                    value="general inquiry"
                                />
                                General Inquiry
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="subject"
                                    value="survey"
                                />
                                Schedule a survey
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="subject"
                                    value="survey"
                                />
                                Consultancy
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="subject"
                                    value="survey"
                                />
                                Product purchase
                            </label>
                        </div>
                    </div>
                    <div className="inquiry__form__formWrapper__message">
                        <label htmlFor="message">Message</label>
                        <Field
                            id="message"
                            name="message"
                            placeholder="Type your message..."
                            type="text"
                        />
                    </div>

                    <button type="submit">Send Message</button>
                </Form>
            </Formik>
        </section>
    );
};

const Certification = () => {
    return (
        <section className="certification flex fluid__container mt-100">
            <div>
                <img src={Certificate} alt="" />
            </div>
            <div>
                <img src={CertificateIcon} alt="" />
                <h4>The Institute of Fire Engineers</h4>
                <p>2015</p>
            </div>
        </section>
    );
};
export default Home;
