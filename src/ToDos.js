import React from 'react'
import SingleToDo from './SingleToDo'
import { Input, Button } from 'antd';

class ToDos extends React.Component {

	renderAllToDos = () => {
		return Array.from(Array(20).keys()).map(num => <SingleToDo key={num} />)
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	render(){
		return(
			<div>	
				<div>
					<div>
						{this.renderAllToDos()}
						<br />
						<br />
					</div>
				</div>
				<div style={styles.form}>
					<form onSubmit={this.handleSubmit}>
						<Input
						  style={{width: '90%'}}
					      placeholder="Enter a Task"
					      size="large"
					    />
					    <Button type="danger" style={{widht: '10%', height: '2.9em'}}>Add Task</Button>
					</form>
				</div>
			</div>

		)
	}
}

export default ToDos

const styles = {
	form: {
		height: '40px',
	    position: 'fixed',
	    bottom:'0%',
	    width:'100%',
	}
}