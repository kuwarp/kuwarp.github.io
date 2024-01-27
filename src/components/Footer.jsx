import React from 'react'
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {SiHashnode} from 'react-icons/si'
import { ImYoutube2 } from "react-icons/im";
const Footer = () => {

  

  return (
    <>
        <footer className="rn-footer footer-style-default variation-two">
            
            <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms And Condition</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-lg-8 col-md-5 ">
                        <div className="copyright-center text-center">
                            <ul className="ft-menu link-hover ">
                                <li><a href="https://www.github.com/kuwarp"><FiGithub /></a></li>
                                <li><a href="https://twitter.com/kuwar7017"><FiTwitter /></a></li>
                                <li><a href="https://www.youtube.com/@kubekode"><ImYoutube2 /></a></li>
                                <li><a href="https://www.linkedin.com/in/kps70/"><FiLinkedin /></a></li>
                                <li> <a href='https://blog.kubekode.org/'><SiHashnode /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                        <div className="copyright-right text-center text-lg-right">
                            <p className="copyright-text">Copyright All rights reserved © {new Date().getFullYear()} Kuwar pratap singh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        {/* <ScrollTop /> */}
    </>
)
}

export default Footer