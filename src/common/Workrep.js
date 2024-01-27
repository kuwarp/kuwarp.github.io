import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaClone, FaCodeBranch } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Workrep = ({ column, teamStyle }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // State to track whether to show all items

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/kuwarp/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        //   if (!response.language === 'javascript') {

        //   }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  const itemsToShow = showAll ? data.length : 6;


  return (
    <div className="row row--15">
      {data.slice(0,itemsToShow).map((data, index) => (
        <div className={`${column}`} key={index}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`rn-box-card `}>
              <div className="inner">
                <figure className="thumbnail ">
                  <img src={`./images/kp.png`} alt="Corporate React Template" />
                </figure>
                <figcaption className=" p-4">
                  <div className="flex d-flex justify-content-between">
                    <p className="align-items-end">{data.visibility} </p>
                    <p>{data.language}</p>
                  </div>
                  <div className="d-flex justify-content-center m-4">
                    <h6 className="">{data.name}</h6>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <a href={data.clone_url} target="_blank" rel="noreferrer">
                      <FaClone />
                    </a>{" "}
                    <a href={data.forks_url} target="_blank" rel="noreferrer">
                      <FaCodeBranch />
                    </a>{" "}
                    <a href={data.html_url} target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>{" "}
                  </div>{" "}
                </figcaption>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
       <div className="d-flex mt-4  justify-content-end">
{ (
            <button className="btn download-button text-white  " onClick={toggleShowAll}> {showAll ? 'Show Less' : 'Show More'}</button>
          )}</div>
    </div>
  );
};

export default Workrep;
