import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
import '../App.css';

let quotes = ["“This is perfect to use when you eat something you do not want hanging around. It will completely flush your system in the most gentle manner.” – AB",
    "“This is magic! I spent thousands of dollars going to doctors trying to get help with severe constipation. I take 5 at night and 5 upon waking and I’m finally stating to get relief after a week.” – Gigi",
    "“This supplement is a miracle!!! In 3 days I was cleaned out – no cramping or nausea. The first time I have felt not bloated and stuffed for 6 years.” – Lana F.",
    "“I have been using this product for over 2 years and absolutely LOVE it!” – Dana S."
];

export default function Landing(props) {
    return (
        <div className='landingPage'>
            <Container>
                {/* product details */}
                <Row className='landingSection'>
                    {/* Text */}
                    <Col md="8" className="landingText">
                        <div className='productDetails'>
                            <div className='landingTextContent'>
                                <div style={{ fontSize: '1.75rem', textDecoration: 'underline' }}>
                                    A GENTLE DIGESTIVE CLEANSE
                                </div>
                                <div style={{ fontSize: '1.5rem' }}>
                                    Wake up each day feeling clean and energized! Mag O7 gently breaks down and removes digestive waste overnight — without causing cramping or bloating — using the power of MOXiO3.
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Image */}
                    <Col md="4" className="landingImage">
                        <div className="mainImage" />
                    </Col>
                </Row>
                {/* good uses */}
                <Row className='landingSection'>
                    {/* Image */}
                    <Col md="5" className="landingImage">
                        <div className="goodUses" />
                    </Col>
                    {/* Text */}
                    <Col md="7" className="landingText">
                        <div className='howQuote'>
                            <div className='landingTextContent' >
                                <div style={{ fontSize: '1.3rem', textDecoration: 'underline' }}>
                                    Mag O7 is an excellent supplement for people with:
                                </div>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div>•	Bowel irregularity </div>
                                    <div>•	Occasional constipation</div>
                                    <div>•	Indigestion</div>
                                    <div>•	Candidasis</div>
                                    <div>•	Diverticulitis</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* how it works */}
                <Row className='landingSection'>
                    {/* Text */}
                    <Col md="7" className="landingText">
                        <div className='howQuote'>
                            <div className='landingTextContent' >
                                <div style={{ fontSize: '1.3rem', textDecoration: 'underline' }}>
                                    HOW MAG O7 WORKS
                                </div>
                                <div style={{ fontSize: '1.1rem' }}>
                                    This magnesium-based cleanser releases oxygen that travels through the digestive tract, supporting healthy bacteria without causing painful gas, bloating or cramping.
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Image */}
                    <Col md="5" className="landingImage">
                        <div className="howItWorks" />
                    </Col>
                </Row>
                {/* random quotes */}
                <Row className='landingSection'>
                    {/* Image */}
                    <Col md="5" className="landingImage">
                        <div className="backgroundImage" />
                    </Col>
                    {/* Text */}
                    <Col md="7" className="landingText">
                        <div className='quotes'>
                            <div className='landingTextContent' >{quotes[Math.floor(Math.random() * Math.floor(3))]}</div>
                        </div>
                    </Col>
                </Row>
                {/* about us */}
                <Row className='landingSection'>
                    {/* Image */}
                    <Col md="6" className="landingImage">
                        <ReactPlayer url='https://player.vimeo.com/video/297326552?autoplay=1' controls width="100%" />
                    </Col>
                    {/* Text */}
                    <Col md="6" className="landingText">
                        <div className='howQuote'>
                            <div className='landingTextContent' >
                                <div style={{ fontSize: '1.3rem', textDecoration: 'underline' }}>
                                    Who We Are:
                                </div>
                                <div style={{ fontSize: '1.1rem' }}>
                                    At Nutritional Brands we’ve been promoting health and wellness with all-natural, premium supplements for nearly 50 years. Our products are held to the highest standards, made in our FDA-registered facility using the strictest pharmaceutical practices. We refuse to use binders, excipients, or any other fillers in anything we make.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}