import styles from "../../styles.css";


import React, {useState, useEffect} from "react";
import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";

import Form from "../form/form";
import ToDo from "../toDo/toDo";

function Home() {
    




    return(
        <div className="home">
            <div className="hero">
                <h2>WELCOME TO</h2>
                <h1>GROCERY</h1>
                <h1>LIST MAKER</h1>
            </div>
            <div className="listForm">
                <Form/>
            </div>
        </div>
    );
}

export default Home;