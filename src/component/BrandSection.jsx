import React from 'react'
import "../styles/brandSection.css"
import { Fade, Zoom } from "react-reveal"
import { StaticImage } from "gatsby-plugin-image"

const BrandSection = () => {
    return (
        <div style={{ display: "grid" }}>
            <StaticImage
                style={{
                    gridArea: "1/1",
                }}
                layout="fullWidth"
                aspectRatio={3 / 1}
                alt="pill organizer"
                src="../images/hero.jpg"
                formats={["auto", "webp", "avif"]}
                transformOptions={{
                    grayscale: true,
                }}
            />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    padding: "50px",
                }}
                className="brand-section"
            >
                <Zoom>
                    <StaticImage
                        src='../images/muffshell-logo.png'
                        height={200}
                        alt="muffshell"
                    />
                </Zoom>
                <h1 className='text-center'>Pill Organizer <br /><span>{"&"}</span><br /> Pill Crusher</h1>
                <a href='https://www.amazon.com/muffshell' className='btn purchase-now-btn'>Purchase Now</a>
            </div>
        </div>
    )
}

export default BrandSection