import React from 'react'
import "../styles/imageCarousel.css"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const ImageCarousel = () => {
    return (
        <div id="slider" className='slider'>
            <Carousel slide interval={5000}>
                <Carousel.Item>
                    <StaticImage
                        src='../images/muffshell-slider3.jpg'
                        alt='pill box'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <StaticImage
                        src='../images/muffshell-slider2.jpg'
                        alt='pill case'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageCarousel