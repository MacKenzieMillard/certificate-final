import React from "react";
// import firebase from "../../utilities/firebase";
// import BootstrapComponent from "../bootstrap/bootstrapComp";
import styles from "../../styles.css";
import { Button } from "react-bootstrap";


 
// function ToDo({ todo }) {
//     const completeToDo = () => {
//         // calling on firebase to get data
//         const todoRef = firebase.database().ref("crud-todo").child(todo.id);

//         todoRef.update({
//             // i think this mean if todo is false (or incomplete), it will change it to true (or complete)
//             complete: !todo.complete,
//         })
//     }

//     const deleteToDo = () => {
//         const todoRef = firebase.database().ref("crud-todo").child(todo.id);

//         todoRef.remove();
//     }

//     return(
//         <div className="listParent">
//             <div className="listItem">
//             {/* if todo.complete is true give it class complete, else if it's not true give class incomplete */}
//                 <h1 className={todo.complete ? 'complete' : 'incomplete'}>{todo.title}</h1>
//                 <div className="itemButtons">
//                     <Button variant="danger" onClick={deleteToDo}>DELETE</Button>
//                     <Button className={todo.complete ? 'hide-button' : ''} variant="success" onClick={completeToDo}>CHECK</Button>
//                     <Button className={todo.complete ? '' : 'hide-button'} variant="success" onClick={completeToDo}>UNCHECK</Button>
//                 </div> 
//             </div>
//         </div>
        
//     );
// }

// export default ToDo;