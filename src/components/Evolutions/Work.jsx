import React, { useState, useEffect } from 'react';
import Workrep from '../../common/Workrep';
import {  FaOrcid, FaTwitter } from 'react-icons/fa';
import { FcOrganization } from 'react-icons/fc';
import { GoRepoForked } from 'react-icons/go';
import { SiAwsorganizations, SiLinkedin } from 'react-icons/si';
import Workorg from '../../common/Workorg';


const Work=()=>{

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/kuwarp"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        //   if (!response.language === 'javascript') {

        //   }


      } catch (error) {
        console.error("Error fetching data:", error);
        setData(false)
      }
    }

    fetchData();
  }, []);





  return (

    <div className='container'>
<h1 className='mt-4 theme-gradient '> My GitHub Assets</h1>
      <div className="rwt-testimonial-area rn-section-gap mt-lg-5">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-12 mt-lg-4 ">
              {/* <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "Testimonial."
                                    /> */}
              <div className="about-style-5 rn-section-gapBottom">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="row row--0 about-wrapper align-items-center theme-shape">
                      

                       
                          <div className="col-lg-6">
                            <div className="thumbnail">
                              <img src={data.avatar_url} alt="About Images" />
                            </div>
                          </div>
                          <div className="col-lg-6 mt_md--30  mt_sm--30">
                            <div className="content">
                              <div className="inner">
                                <h4 className="title">{data.name}</h4>
                                <p>{data.bio}</p>
                                <ul style={{ listStyle: 'none', color: 'blue' }} >
                                  <li>
                                        <FaTwitter/> : <a href='https://twitter.com/kuwar7017' target='_blank' rel="noreferrer">  @kuwar7017</a>
                                        </li>
                                          <li> <FcOrganization/> : <a href='https://kubekode.org' target='_blank' rel="noreferrer">{data.company}</a></li>
                                          <li> <SiLinkedin/> : <a href='https://www.linkedin.com/in/kps70' target='_blank' rel="noreferrer">@Kuwar Pratap Singh</a></li>
                                         
                                          </ul>
                                <div className="download-button mt--20">
                                  <a className="btn-read-more" target='_blank' rel='noreferrer' href="https://blog.kubekode.org"><span>My Blogs</span></a>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  >

          </div>
<h3> Our Orgs Work  <SiAwsorganizations /> </h3>
<Workorg column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one"/>
          <h3 className='mt-4'> My Personal Public Repos <GoRepoForked/> </h3>
          <Workrep column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
        </div>
      </div>









      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
           
            <li key={item.id}>
               
                 <a href={item.html_url} target='_blank'rel="noreferrer">
                {item.name}<br/>{item.clone_url} <br/> </a> <br/>
                <a href={item.deployments_url} target='_blank'rel="noreferrer"> Deployments</a>
                <br/> {item.forks_url}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Work;
