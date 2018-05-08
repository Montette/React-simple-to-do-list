import React from 'react';
import Todo from './Todo';
import style from './css/TodoList.css';

const TodoList = props => {
    let tasks = props.data.map((task) => <Todo  key={task.id} id={task.id} remove={props.remove} name={task.text} />)
	return (
		<div className={style.tasksWrapper}>
            <ul>{tasks}</ul>
		</div>
	);
};

export default TodoList;