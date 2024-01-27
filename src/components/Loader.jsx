
import React from 'react';
import Typed from 'react-typed'
const Loader = () => (
  // <></>
  <>
  <div className=' slider-perosonal-portfolio height-650' >
  <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title"> 
                                    <Typed className="theme-gradient"
                                        strings={[
                                            " Hey!",
                                            " Welcome to",
                                            " Kuwarp's.",
                                        ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        backDelay={2000}
                                        loop
                                    />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
  </div>
  </>
);

export default Loader;