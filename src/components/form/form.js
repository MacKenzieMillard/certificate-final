import styles from "../../styles.css";


import React, {useState} from "react";
import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";

function Form() {
    const [title, setTitle] = useState("");

    const handleOnChange = (e) => {
        setTitle(e.target.value);

    }

    const createToDo = () => {
        const todoRef = firebase.database().ref("certificateFinal");
        const todo = {
            title,
            complete: false
        }

        todoRef.push(todo);
        setTitle("")
    }

    return(
        <div className="listForm">
            {/* i don't know how to make it so that all three inputs aren't the same; i tried to make like, 'title1' 'title2' 'title3' instead of just 'title', but that didn't do anything */}
            <div className="itemDiv">
                <h4>Food Items</h4>
                <input type="text" onChange={handleOnChange} value={title}/>
                <Button className="createBtn" onClick={createToDo}>CREATE ITEM</Button>
            </div>
            <div className="itemDiv">
                <h4>Clothing Items</h4>
                <input type="text" onChange={handleOnChange} value={title}/>
                <Button className="createBtn" onClick={createToDo}>CREATE ITEM</Button>
            </div>
            <div className="itemDiv">
                <h4>Miscellaneous Items</h4>
                <input type="text" onChange={handleOnChange} value={title}/>
                <Button className="createBtn" onClick={createToDo}>CREATE ITEM</Button>
            </div>
        </div>
    );
}

export default Form;