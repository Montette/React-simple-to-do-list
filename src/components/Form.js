import React from 'react';
import style from './css/Form.css';



class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          newTask: '',
        };
    }
   onChangeHandle(event) {
        this.setState({newTask: event.target.value});
      }

    onSubmit(event) {
        this.props.add(this.state.newTask);
        event.preventDefault();
        this.state.newTask = '';
    }

    render (){
        return (
            <form className={style.form} onSubmit={event => this.onSubmit(event)}>
                <input
                className={style.input}
                type="text"
                placeholder='Add task...'
                onChange={event => this.onChangeHandle(event)}
                value={this.state.newTask}/>
                <button className={style.addButton}>Add new task</button>
            </form>
       )
   }
}

export default Form; 