import React from 'react'
import { Icon } from 'antd'

class SingleToDo extends React.Component {
	render(){
		return(
			<div style={styles.task}>
				<div style={styles.title}>Hello World</div>
				<div style={styles.icons}>
					<Icon type="edit" />&nbsp;&nbsp;&nbsp;&nbsp;
					<Icon type="delete" />
				</div>
			</div>
		)
	}
}

export default SingleToDo

const styles = {
	task: {
		borderBottom: '0.5px solid lightgray'
	},
	title: {
		textAlign: 'left',
		paddingTop: 2,
		marginLeft: '10px'
	},
	icons: {
		textAlign: 'right',
		marginRight: '10px',
		cursor: 'pointer'
	}
}