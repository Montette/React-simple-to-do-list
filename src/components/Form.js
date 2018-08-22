import React from 'react';
import style from './css/Form.css';


    const Form = (props) => {
        return (
            <form className={style.form} onSubmit={event => props.onSubmit(event)}>
                <input
                className={style.input}
                type="text"
                placeholder={props.placeholder}
                onChange={event => props.onChange(event)}
                value={props.inputValue}/>
                <button className={style.addButton}>Add new task</button>
            </form>
       ) 
}

export default Form; 