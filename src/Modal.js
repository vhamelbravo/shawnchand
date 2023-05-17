import React, {Component } from 'react'
import Portal from './Portal'
import background from './assets/background.png'

export default class Modal extends Component {
render () {
	const {children, toggle, active } = this.props
	return (
		<Portal className="h-[1000px]">
		{active && (
		<div className="portfolio-wrapper h-[1000px] " style={styles.wrapper}>
			<div className="portfolio w-[80%] h-[1000px]"  style={styles.window}>
			<button className="navbar-x text-white mx-[2%] my-[2%] scale-[200%]" style={styles.closeBtn} onClick={toggle}> X </button>
			<div className="children h-[1000px]"> {children} </div>
			</div>

		</div>)}
		</Portal>
	)
}
}

const styles = {
	wrapper: {
		position: 'absolute',
                top: '0',
	        left: '0',
	        width: '100%',
	        display: 'flex',
	        justifyContent: 'center',
		alignItems: 'center',
	},
	window: {
		position: 'relative',
	        backgroundImage:`url(${background})`,
		backgroundSize:'cover',
		border: '1px solid',
	        borderRadius: 5,
	        padding: 15,
	        zIndex: 10,
	},
	closeBtn: {
		position: 'absolute',
	        top: 0,
	        right: 0,
	}
}
