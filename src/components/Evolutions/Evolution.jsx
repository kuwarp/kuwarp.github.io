import React from 'react'
import Service from '../../common/Service'
import SectionTitle from '../../common/SectionTitleA'
import Aboutcommon from '../../common/Aboutcommon'
import { ImYoutube2 } from "react-icons/im";
const Evolution = () => {
  return (
   <>
     <div className="slider-perosonal-portfolio height-650 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-11.jpg)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title">Hello ! EveryOne This Is </h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Aboutcommon />
               
                <div className="inner text-center text-lg-center">
               <a  href='https://www.youtube.com/@kubekode' target='_blank' rel="noreferrer">  <h1> < ImYoutube2  size={130}/>  <span> Kubekode</span></h1></a>
                <h1 className='theme-gradient'>  Kuwar Pratap Singh</h1>
                <br/>
                                   
                                </div>
               
   </>
  )
}

export default Evolution