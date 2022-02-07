import styles from "../../styles.css";


import React, {useState, useEffect} from "react";
import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";

import Form from "../form/form";
import ToDo from "../toDo/toDo";
import ToDoList from "../toDoList/toDoList";

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
                {/* <ToDoList/> */}
                {/* this is commented out because when it's not the webpage just does not show up. it's just a blank white page. i don't know why. */}
            </div>
        </div>
    );
}

export default Home;