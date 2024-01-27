import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {RiReactjsLine} from "react-icons/ri"
import {FaNode,FaGitAlt, FaAws} from "react-icons/fa"
import {SiApachekafka, SiApifox, SiAzurepipelines, SiCloudflare, SiFirebase, SiHashnode, SiMongodb, SiMongoose, SiSqlite} from 'react-icons/si'
import {SiMysql,SiAwslambda,SiAmazonaws,SiGooglecloud,SiAmazonec2,SiJavascript,SiTypescript,SiKubernetes,SiTerraform,SiWebpack,SiAngularjs,SiHtml5,SiTailwindcss,SiCss3,SiPython,SiJenkins,SiReactquery,SiGooglebigquery,} from "react-icons/si"

import {GiBeanstalk} from "react-icons/gi"

import {FcLinux} from "react-icons/fc"


const TabOne = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                               
                                <div className="col-lg-12 mt_md--40 mt_sm--40">
                                    <div className="rn-default-tab">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Front-End languages</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Backend Languages</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Cloud Aspects</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>DevOps</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>DataBases</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Others</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                        <TabPanel>
                                        <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                                <li className=' socio' > <RiReactjsLine /></li>
                                <li className=' socio'>< SiAngularjs /></li>
                                <li className=' socio'><SiHtml5 /></li>
                                <li className=' socio'><SiTailwindcss /></li>
                                <li className=' socio'> <SiCss3 /></li> 
                                <li className='socio'><SiReactquery/></li>
                               
                            </ul>
                        </div>
                    </div>
                    </div> 
                                            </TabPanel>
                                            
                                            <TabPanel>
                                            <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                                <li className=' socio' > <FaNode /></li>
                                <li className=' socio'>< SiJavascript /></li>
                                <li className=' socio'><SiTypescript /></li>
                                <li className=' socio'><SiPython /></li>
                                <li className=' socio'> <SiAzurepipelines /></li>
                            </ul>
                        </div>
                    </div>
                    </div> 
                                            </TabPanel>

                                            <TabPanel>
                                            <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                                <li className=' socio' > <SiAwslambda /></li>
                                <li className=' socio'>< FaAws /></li>
                                <li className=' socio'><SiGooglecloud /></li>
                                <li className=' socio'><SiCloudflare /></li>
                                <li className=' socio'> <SiAmazonec2 /></li>
                            </ul>
                        </div>
                    </div>
                    </div> 
                                            </TabPanel>
                                        
                                            <TabPanel>
                                            <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                            <li className='socio'>< SiKubernetes/></li>
                                <li className=' socio'><SiTerraform /></li>
                                <li className=' socio'><SiWebpack /></li>
                                <li className=' socio'><SiAmazonaws /></li>
                                <li className=' socio'> <SiApachekafka /></li>
                                <li className='socio'><SiGooglebigquery/></li>
                            </ul>
                        </div>
                    </div>
                    </div> 
                                            </TabPanel>
                                            <TabPanel>
                                            <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                            <li className='socio'><SiFirebase/></li>
                                <li className=' socio'><SiMongodb /></li>
                                <li className=' socio'><SiMysql /></li>
                                <li className=' socio'><SiMongoose /></li>
                                <li className=' socio'> <SiSqlite /></li>
                                <li className='socio'><SiGooglebigquery/></li>
                            </ul>
                        </div>
                    </div>
                    </div> 
                                            </TabPanel>
                                            <TabPanel >
                                                <div className='container copyright-area copyright-style-two variation-two row align-items-center'>
                                            <div className="col-lg-8  col-md-5 ">
                        <div className="copyright-center  text-center">
                            <ul className="ft-menu  link-hover  ">
                                <li className=' socio'><GiBeanstalk/> </li>
                                <li className=' socio'><FcLinux /></li>
                                <li className=' socio'><SiJenkins /></li>
                                <li className=' socio'><FaGitAlt /></li>
                                <li className=' socio'> <SiHashnode /></li>
                                <li className=' socio'> <SiApifox /></li>
                            </ul>
                        </div>
                    </div>
                    </div>                </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabOne
