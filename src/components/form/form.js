import styles from "../../styles.css";


import React, {useState} from "react";
// import firebase from "../../utilities/firebase";
import { Button } from "react-bootstrap";

// function Form() {
//     const [title, setTitle] = useState("");

//     const handleOnChange = (e) => {
//         setTitle(e.target.value);

//     }

//     const createToDo = () => {
//         const todoRef = firebase.database().ref("certificateFinal");
//         const todo = {
//             title,
//             complete: false
//         }

//         todoRef.push(todo);
//         setTitle("")
//     }

//     return(
//         <div>
//             <input type="text" onChange={handleOnChange} value={title}/>
//             <Button variant="primary" onClick={createToDo}>CREATE GROCERY ITEM</Button>
//         </div>
//     );
// }

// export default Form;