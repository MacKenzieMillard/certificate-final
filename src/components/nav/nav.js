import styles from "../../styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import { Button } from "react-bootstrap";
import React from "react";


function Nav() {
    return(



        <nav className="navigation">
            <div className="links">
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="#">Log Out</a>
            </div>
            <div className="searchBar">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
                    <input type="text" value="Search"/>
            </div>
        </nav> 
    );
}

export default Nav;