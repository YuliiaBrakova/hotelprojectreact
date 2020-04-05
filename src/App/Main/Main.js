import React from 'react'
import {Link} from 'react-router-dom'


import BookingBar from './BookingBar/BookingBar'
import Rooms from './Rooms/Rooms'
import Actvities from './Activities/Activities'
// import DeluxeRooms from './DeluxeRooms/DeluxeRooms'
import News from './News/News'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<BookingBar/>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Link to='/'><h1>AWARD WINNING Hotels</h1></Link>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Rooms/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="btn_hotel">
							<a href=""><button type="submite"className="btn_hotel_list">MORE</button></a>
						</div>
					</div>
				</div>
				<div className="activities_list row">
					<div className="col-md-12">
						<a href=""><h1>Winter activities</h1></a>
					</div>
				</div>
			</div>
				<div className="flex">
					<Actvities/>
				</div>
			<div className="container">
				{/* <div className="row">
					<div className="room_views row">
						<a href=""><h1>DELUXE ROOMS WITH A BEAUTIFUL VIEW</h1></a>
					</div>>
				</div> */}
				{/* <div className="flex">
					
					<DeluxeRooms/>
				</div> */}
				<div className="row">
					<div className="col-md-12">
						<a href=""><h1>News From Us</h1></a>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<News/>
					</div>
				</div>
		</div>
		</main>
	)
}

export default Main