import React from 'react';
import style from './css/Title.css';

const Title = props => {
	let task = props.tasksAmount == 1 ? 'task':'tasks';
	let amountOftasks = props.tasksAmount == 0 ? 'You did all your tasks' : `I have ${props.tasksAmount} ${task} to do`
	return (
		<div className={style.Title}>
			<h1>{props.title}</h1>
			<h2>{amountOftasks}</h2>
		</div>
	);
};

export default Title;