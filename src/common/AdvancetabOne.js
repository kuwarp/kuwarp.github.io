import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancetabOne = () => {
    return (
        <div>
            <Tabs>
                <div className="row row--30">
                    <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
                        <div className="advance-tab-button advance-tab-button-1">
                            <TabList className="tab-button-list">
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Per Square Feet </h4>
                                        <p className="description">SDE FullStack Engineer -Gurugram,India</p>
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">IMS Pvt. Ltd.</h4>
                                        <p className="description">FrontEnd Developer-Gurugram,India.</p>
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Novarsistech- IT Leading </h4>
                                        <p className="description"> Developer -Indore,India</p>
                                    </div>   
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="advance-tab-content advance-tab-content-1">
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                        <ul>
                                            <li>Developed REST APIs and Managed the Dashboard code, make changes as per client Needs. Working on scheduled tickets</li> 
                                            <li>Making Attractive Ui, creating unique tools like  mapped to custom defined field , creating pipeline to display data into various components. </li>
<li>Leveraged creating pacakges , enabling seamless integration,
testing, and deployment of code changes across environments.  </li>
<li>Implemented infrastructure-as-code ,
allowing for scalable and reproducible infrastructure deployments on AWS.</li>
<li>. Developed custom automation frameworks combining technologies such as Reactjs,azure,Django and OpenAI to automate theflow  and reduce human error. For example, Custom user demanded Forms ,where user can design as he want without intruppting the code.</li>
<li> Utilized Shell  Engine and Cloud Run for deploying and managing client microservices.</li>
<li> Creating CMS,ui component where AI Integrating </li>
<li>Developed a custom UI library that increased developer productivity and code reuse. Working on developing
features in projects</li>
<li> Managed the devops sections from deploying to migration</li>
                                        </ul>
                                         </div>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <ul>
                                                <li>Developed a custom UI library that increased developer productivity and code reuse. Working on developing
features in projects (node.js, PHP ,Reactjs.)</li>
<li>Developing and maintaining code pipelines for code deployment using company Dedicated hosting server.</li>
<li>Developed Custom API and integrating clients APIs to the projects.Creating Admin Dashboard with Web APi
integrations</li>
<li> Creating Admin Dashboard with Web APi integrations .</li>
<li>Collaborated with development teams to gather requirements, design, and develop custom  tools.</li>
                                            </ul>
                                              </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail"> 
                                        <ul>
                                            <li>Working on developing new functionality in projects.</li>
                                            <li> Developing and maintaining code pipelines for code deployment using different Technologies.</li>
                                            <li>Integrating Monitoring tools, Security Scanners with GitHub Actions workflows.</li>
                                            <li>Working on deployments, validations and configurations in the Projects.</li>
                                            <li>Orchestrated containerized applications using Docker on AWS, enabling seamless deployment and scaling 
of microservices. </li>
<h3>Close Calls:</h3> <br/>
<li> Work with Marketing Teams. </li>
<li>Content writing</li>
                                        </ul>
                                          </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
export default AdvancetabOne;