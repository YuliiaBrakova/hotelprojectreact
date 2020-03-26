import React from 'react'
import {Route} from 'react-router-dom'

import BookingBar from './BookingBar/BookingBar'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<BookingBar/>
				</div>
			</div>
		</main>
	)
}

export default Main