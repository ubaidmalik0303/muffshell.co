import React from 'react'
import "../styles/pillOrganizer.css"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"


const PillOrganizer = () => {
    return (
        <div id="pill-organizer" className="container-fluid bg-412722">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 text-center py-5">
                        <Slide left>
                            <StaticImage
                                src='../images/pill-organizer.jpg'
                                width={400}
                                imgClassName="border-bottom border-top py-3"
                                alt='muffshell pill organizer'
                            />
                        </Slide>
                    </div>
                    <div className="col-md-7">
                        <Slide right>
                            <h2 className='font-size-xlg text-white border-bottom pb-2 mb-3'><span>MuffShell </span>Pill Organizer</h2>
                            <p className='text-white font-size-md'>The latest design has been used on this weekly pill organizer to achieve one-handed operation with the little rubber strips for the smart "spring open lid" feature. The lids are all beautifully colored and marked clearly with the day, everything is clear at a glance so you may find it easy to choose the pills you need.</p>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PillOrganizer