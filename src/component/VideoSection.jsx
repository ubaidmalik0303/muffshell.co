import React from 'react'
import "../styles/videoSection.css"
import PillOrganizerVideo from "../images/PILL-ORGANIZER-REVISION.mp4"
import { Slide } from "react-reveal"


const VideoSection = () => {
  return (
    <div className="container-fluid videosection py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Slide left>
              <video autoPlay loop controls muted width="100%">
                <source src={PillOrganizerVideo} />
              </video>
            </Slide>
          </div>
          <div className="col-md-6">
            <Slide right>
              <h3 className='font-size-xlg text-white border-bottom'>MAKE YOUR<span> PILLS </span>EASY TO SWALLOW</h3>
              <p className='text-white font-size-md'>This Pill crusher grinder can pulverize pills at once.It effortlessly crushes your medication into fine powder, which makes it easier to swallow, and will help a lot in digestion and absorption.</p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection