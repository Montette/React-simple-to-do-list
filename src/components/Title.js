import React from 'react';
import style from "./css/Title.css";

const Title = props => {
	
let amountOftasks = props.tasksAmount == 0 ? 'You did all your tasks' : `You have ${props.tasksAmount} tasks to do`
	return (
		<div className={style.Title}>
			<h1>{props.title}</h1>
			<h2>{amountOftasks}</h2>
		</div>
	);
};

export default Title;