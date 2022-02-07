import styles from "../../styles.css";


import React, {useState} from "react";
import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";


function ToDo({todo}) {
    const completeToDo =  () => {
        const todoRef = firebase.database().ref("certificateFinal").child(todo.id);

        todoRef.update({
            complete: !todo.complete,
        })
    }

    const deleteToDo = () => {
        const todoRef = firebase.database().ref("certificateFinal").child(todo.id);

        todoRef.remove();
    }


    return(
        <div>
            <h1 className={todo.complete ? "complete" : "incomplete"}>{todo.title}</h1>
            <Button onClick={deleteToDo} className="createBtn">Delete</Button>
            <Button onClick={completeToDo} className={todo.complete ? "hide-button" : "button"}>Check</Button>
            <Button onClick={completeToDo} className={todo.complete ? "button" : "hide-button"}>Uncheck</Button>
        </div>
    );
}

export default ToDo;