import React from 'react'

import kpabout from "../../assets/images/kp-about.png"
const Education = () => {
  return (
    <>
     <div className="slider-perosonal-portfolio height-750 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-11.jpg)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title"> <span className="theme-gradient">Journals For Techies!</span></h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     <div className="about-style-5 rn-section-gapBottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="row row--0 about-wrapper align-items-center theme-shape">
                    <div className="col-lg-6">
                    <a href='https://blog.kubekode.org/' rel='noreferrer' target='_blank' >
                     <div className="thumbnail">
                            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1698198642448/He44qlHG8.png?w=1000&h=250&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="About Images" />
                        </div> 
                        </a>
                    </div>     
                                    <div className="col-lg-6">
                                      <a href='https://glitchofcode.hashnode.dev/' rel='noreferrer' target='_blank'>
                        <div className="thumbnail">
                            {/* <img src={kpabout} alt="About Images" /> */}
                            <h1 className='bg-gradient theme-gradient p-3'> GlitchofCode</h1>
                        </div> 
                        </a>
                    </div>
                    {/* <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="inner">
                                <h4 className="title">I'm a Developer</h4>
                                <p>I am a Web/Software Developer also having intrest in Clouds,DevOps and also Content Writing</p>
                                <ul className="contact-address">
                                    <li><FaDeviantart /> HTML,CSS,ReactJs,NodeJs</li>
                                    <li><FiCloud /> AWS, GCP, Cloudinary</li>
                                   <li><FcElectroDevices />GitHub,Git,Linux</li>
<li> <FaDatabase/> SQL,MongoDB,Cloudinary,Firebase </li>
                                    <li> <SiAzuredevops/>Docker,Kubernates,Terraform,jenkkins,DevOps</li>
                                    <li><FiPhone /> <a href='tel:+917017949440'> tel:+917017949440</a></li>
                                    <li><FiMapPin /> India</li>
                                </ul>
                                <div className="download-button mt--20">
                                    <a className="btn-read-more" target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1CG0-NQW0EO_ViBDqnH3HA-OKVkkPr1vl/view?usp=sharing"><span>Download My CV</span></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Education