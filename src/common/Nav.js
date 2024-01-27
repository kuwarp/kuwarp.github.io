import React from 'react';
import {Link} from "react-router-dom";
import Darkmode from './Darkmode';

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Home</Link>
              
            </li>
            

      

            <li className="has-droupdown"><Link to="/about-me">About</Link>
             
            </li>

            <li className="has-droupdown"><Link to="/work">Work</Link>
                {/* <ul className="submenu">
                    <li><Link to="/reactjs-project">React js Project</Link></li>
                    <li><Link to="/devops-projects">DevOps</Link></li>
                    <li><Link to="/gcp-based">GCP Based</Link></li>
                    <li><Link to="/vitejs-project">Vite.Js</Link></li>
                    <li><Link to="/other-project">Others</Link></li>
                    <li><Link to="/e-commerce">E-Commerce</Link></li>
                </ul> */}
            </li>
            <li className="has-droupdown"><Link to="/educations">Books & papers</Link>
             
             </li>
            {/* <li><Link to="/pricing">Offer-Pricing</Link></li> */}
            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
           
        </ul>
       
    )
}
export default Nav;
