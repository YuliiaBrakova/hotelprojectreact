import React from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import BookingBar from './BookingBar/BookingBar'
import Rooms from './Rooms/Rooms'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<BookingBar/>
				</div>
				<div class="row">
					<div class="col-md-12">
						<Link to='/'><h1>AWARD WINNING Hotels</h1></Link>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Rooms/>
					</div>
				</div>
				<div class="row">
				<div class="col-md-12">
						<div class="btn_hotel">
							<a href=""><button type="submite"class="btn_hotel_list">MORE</button></a>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main