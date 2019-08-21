import React from 'react'
import Image from './nathan-hurst-Mq1kRSdb3Ik-unsplash.jpg'
import { Icon } from 'antd'

const Header = () => {
	return (
		<div style={styles.header}>
			<div style={styles.text}>To Dos</div>
			<div style={styles.button}><Icon type="reload" /></div>
		</div>
	)
}

export default Header

const styles = {
	header: {
		backgroundImage: `url(${Image})`,
		height: '225px',
		backgroundSize: 'cover'
	},
	text: {
		textAlign: 'left',
		marginTop: '125px',
		position: 'absolute',
		fontSize: '75px',
		color: '#fff'
	},
	button: {
		textAlign: 'right',
		color: '#fff',
		fontSize: '25px',
		marginRight: '10px',
		cursor: 'pointer'

	}
}