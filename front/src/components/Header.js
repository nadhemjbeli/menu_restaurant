import React from 'react';
import "./header.css"
import {Link} from "react-scroll";
import {faArrowDown, faArrowUp, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Header(props) {
    return (
        <div className="container-fluid wrapper">
            <div className="header col-md-12">
                <div className="row col-md-12">
                    <div className="col-md-7"></div>
                    <div className="col-md-5 second">
                        <h3 className="chili" style={{color:"white"}}>Chili's Tunisie</h3>
                        <h2 className="syriennes">
                            Découvrez les meilleurs recettes syriennes
                        </h2>
                        <div className="row">
                            <Link to="targetElement"
                                  spy={true}
                                  smooth={true}
                                  duration={400}
                                  offset={-50}
                                  className="btn btn-danger col-md-7 col-sm-12"
                            >Voir notre menu</Link>
                            <Link to="contactElement"
                                  spy={true}
                                  smooth={true}
                                  duration={800}
                                  offset={-50}
                                  style={{padding:"18px 16px 18px 14px"}}
                                  className="btn btn-contact col-md-1 col-sm-12">
                                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "25px"}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;