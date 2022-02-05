import styles from "../../styles.css";


import React, {useState, useEffect} from "react";
// import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";

import ToDo from "../toDo/toDo";

function Home() {
    // const [todoList, setTodoList] = useState();

    // useEffect(() => {
    //     const todoRef = firebase.database().ref("certificateFinal");

    //     todoRef.on('value', (snapshot) => {
            
    //         const todos = snapshot.val();
    //         const todoList = [];

    //         for (let id in todos) {
    //             todoList.push({ id, ...todos[id] });
    //         }

    //         setTodoList(todoList);
    //     });
    // }, []);

    return(
        <div className="home">
            <div className="hero">
                <h2>WELCOME TO</h2>
                <h1>GROCERY</h1>
                <h1>LIST MAKER</h1>
            </div>
            <div className="listForm">
                <div>
                    <h4>Food Items</h4>
                    <input/>
                    <Button className="createBtn">CREATE ITEM</Button>
                </div>
                <div>
                    <h4>Clothing Items</h4>
                    <input/>
                    <Button className="createBtn">CREATE ITEM</Button>
                </div>
                <div>
                    <h4>Miscellaneous Items</h4>
                    <input/>
                    <Button className="createBtn">CREATE ITEM</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;