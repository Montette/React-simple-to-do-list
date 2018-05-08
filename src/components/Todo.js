import React from 'react';
import style from './css/Todo.css';



const Todo = props => {
    return(
        <li className ={style.task} id={props.id} key={props.id}>   
            <button className ={style.removeButton} onClick={() => props.remove(props.id)}><i className="fas fa-check"></i></button>
            {props.name}
        </li>
    );
}

export default Todo; 