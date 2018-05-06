import React from 'react';
import style from "./css/Title.css";

const Title = props => {
	return (
		<div className={style.Title}>
			<h1>{props.title}</h1>
			<h2>You have {props.tasksAmount} tasks to do.</h2>
		</div>
	);
};

export default Title;