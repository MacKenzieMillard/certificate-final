import styles from "../../styles.css";


import React, {useState, useEffect} from "react";
import firebase from "../../utilities/firebase";

import ToDo from "../toDo/toDo";

function ToDoList() {
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref("certificateFinal");
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({id, ...todos[id]});
            }
            setTodoList(todoList);
        });
    }, []);


    return(
        <div>
            {todoList ? todoList.map((todo, index) => <ToDo todo={todo} key={index}/>) : ""}
        </div>
    );
}

export default ToDoList;