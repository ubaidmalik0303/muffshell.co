import React, { useState } from 'react'
import "../styles/features.css"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Features = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 769 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <div id='features' className="container-fluid py-5 feature-section">
            <div className="container">

                <h4 className='text-center font-size-lg border-bottom mb-5'>Features</h4>

                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    showDots={true}
                    infinite={true}
                    autoPlaySpeed={5000}
                >
                    <div className='feature-card mx-2'>
                        <StaticImage
                            src='../images/spring.jpg'
                            style={{ display: "grid", gridArea: "1/1" }}
                            height={250}
                            alt="medication organizer"
                        />
                        <div className="feature-text p-2 text-center">
                            <h5>SPRING ASSISTED</h5>
                            <p>Spring make easy to open any container with single press. it will make pill organizer more durable.</p>
                        </div>
                    </div>
                    <div className='feature-card mx-2'>
                        <StaticImage
                            src='../images/main pill organizer.png'
                            style={{ display: "grid", gridArea: "1/1" }}
                            height={250}
                            alt="daily pill box organizer"
                        />
                        <div className="feature-text p-2 text-center">
                            <h5>DESIGN WITH LARGE CAPACITY</h5>
                            <p>Our Pill organizer is quite nice for easy daily dispensing and big enough to hold 8 fish oils or 12 large vitamins for each dose 1.3x1.18x0.82 inches.</p>
                        </div>
                    </div>
                    <div className='feature-card mx-2'>
                        <StaticImage
                            src='../images/bpa-free.jpg'
                            style={{ display: "grid", gridArea: "1/1" }}
                            height={250}
                            alt="medicine organizers and storage"
                        />
                        <div className="feature-text p-2 text-center">
                            <h5>BPA FREE MATERIAL</h5>
                            <p>This pill container and pill grinder are pretty safe because of being made of food grade materials. You would be worry-free with the BPA-free pill boxes and crusher when storing multiple pill regimes inside.</p>
                        </div>
                    </div>
                    <div className='feature-card mx-2'>
                        <StaticImage
                            src='../images/spring.jpg'
                            style={{ display: "grid", gridArea: "1/1" }}
                            height={250}
                            alt="pill box for purse"
                        />
                        <div className="feature-text p-2 text-center">
                            <h5>USE ANYWHERE</h5>
                            <p>It's small and perfectly suitable for Home, Office and travel and is ideal for storing Pills, small jewellery or items such as earrings, beads, nail art tips, etc.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Features