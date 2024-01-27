import React,{useState, useEffect} from 'react'
import kpabout from "../../assets/images/kp-about.png"
import SectionTitle from '../../common/SectionTitle'
import AdvancetabOne from '../../common/AdvancetabOne'
import TabOne from '../../common/TabOne'
import Typed from 'react-typed'
// const BannerData = [
//   {
//       image: "/images/hp.jpg",
//       title: "Performance Edge ",
//       description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
//   },
//   {
//       image: "/images/h2.png",
//       title: "Performance Edge ",
//       description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
//   },
//   {
//     image: "/images/h3.png",
//     title: "Performance Edge ",
//     description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
// }

// ]


const Hompage = () => {
 
  return (
//     <div className=' page-wrapper'>
//   <Slider className="slider-area  slider-style-4 " {...BannerActivation}>
//                     {BannerData.map((data, index) => (
//                         <div key={index} className="">
//                             <div className="  bg_image height-650" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
//                                 <div className="container">
//                                     <div className="row row--30 align-items-center">
//                                         <div className="order-2 order-lg-1 col-lg-8">
//                                             <div className="inner text-start">
//                                                 <h1 className="theme-gradient  title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
//                                                 {/* <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p> */}
//                                                 {/* <div className="button-group mt--30">
//                                                     <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">PURCHASE NOW</a>
//                                                 </div> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//                 <div className='container mt--40'>
//                 <div className="row">
//                             <div className="col-lg-12">
//                                 <SectionTitle
//                                     textAlign = "text-center"
//                                     radiusRounded = ""
//                                     subtitle = "About Performance Edge "
//                                     title = "Welcome to Performance Edge "
//                                     description = ""
//                                 />
//                                 <p className='description'>  We are India’s fastest growing Business Project Management company. We are a digitally     
//        empowered company, and we want our outcomes & partnerships to be outstanding. 
//            We create exceptional customer interactions whilst achieving our client’s individual business goals.
// </p>
//                             </div>

//                             <Hero 
//                             serviceStyle = "service__style--2"
//                             textAlign = "text-center"
//                             />
//                         </div>
//                         </div>
//     </div>

<main >
<div className="slider-area slider-style-2 variation-3 height-850  bg_image theme-shape hero-bg" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="inner text-start">
                                    <h4 className="title">Hi there, I am‍ <br /><span className="theme-gradient bolder display-1">Kuwar Pratap Singh</span></h4>
                                    <p className="description">I am an outstanding Software/Web Developer | DevOps Engineer having 2+ yr experience in different technologies . You will find me smiling almost every time while designing thoughtful products, and experiences that people love and businesses value.</p>
                                    <div className="button-group mt--40 mt_sm--20">
                                        {/* <Link className="btn-default btn-border" to="#">Click For Hire Me</Link>
                                        <Link className="btn-default btn-icon" to="#">About Me <i className="icon"><FiArrowRight /></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src={kpabout} alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">A Journey As  <span>  
                                    <Typed className="theme-gradient"
                                        strings={[
                                            " Developer.",
                                            " DevOps.",
                                            " Freelancer.",
                                        ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        backDelay={2000}
                                        loop
                                    />
                                    </span>
                                </h2>
                                <p>My passion for development extends beyond specific technologies, encompassing a broader understanding of infrastructure, CI/CD pipelines, frontend and backend development, REST APIs, and more. As a dedicated learner, I am well-versed in GitHub, CI/CD pipelines, and RESTAPI, contributing to the seamless integration of systems.</p>
                                <p className='justify-content'>In my journey as a software developer, I've not only acquired a vast array of technical skills but have also embraced challenges with enthusiasm and dedication. From crafting elegant UI libraries to orchestrating CI/CD pipelines, each project has been a stepping stone toward excellence.

Visit kuwarpratap.com/works for a comprehensive overview of my portfolio. As I continue to evolve and adapt in this ever-changing tech landscape, my commitment to innovation and excellence remains unwavering. </p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                
                                textAlign = "text-center"
                                radiusRounded = ""
                                subtitle = "You can acquire all."
                                title = "My Career Journey !"
                                
                          />
                            </div>
                        </div>
                        <AdvancetabOne />
                    </div>

                </div>
                <div className="rwt-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Stacks"
                                    title = "Technologies where i work!"
                                    description = "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
                                />
                            </div>
                        </div>
                        <TabOne />
                    </div>
                </div>
</main>
  )
}

export default Hompage