import React from 'react'
import "../styles/pillCrusher.css"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"


const PillCrusher = () => {
    return (
        <div id='pill-crusher' className="container-fluid bg-DF2935">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-7 py-5">
                        <Slide left>
                            <h2 className='font-size-xlg text-white border-bottom pb-2 mb-3'>MuffShell Pill Crusher</h2>
                            <p className='text-white font-size-md'>Muffshell Pill Crusher is constructed in such a way that makes crushing multiple pills at once not only convenient but easy. The pill crushing system is simple to use and can be operated with ease. Gradually apply more pressure until the pills have fully converted into powder form.</p>
                        </Slide>
                    </div>
                    <div className="col-md-5 text-center py-5">
                        <Slide right>
                            <StaticImage
                                src='../images/pill-crusher.jpg'
                                width={400}
                                alt='pill crusher'
                            />
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PillCrusher