import React from 'react'
import {Link} from 'react-router-dom'

import {Route} from 'react-router-dom'



import BookingBar from './BookingBar/BookingBar'
import Rooms from './Rooms/Rooms'
import Actvities from './Activities/Activities'
import DeluxeRooms from './DeluxeRooms/DeluxeRooms'
import News from './News/News'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
					<BookingBar/>
				<div className="row">
					<div className="col-md-12">
						<Link to='/'><h1>AWARD WINNING HOTELS</h1></Link>
					</div>
				</div>
					<Rooms/>
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
				
					<Actvities/>
				
			<div className="container">
				 <div className="row">
					<div className="room_views row">
						<a href=""><h1>DELUXE ROOMS WITH A BEAUTIFUL VIEW</h1></a>
					</div>>
				</div> 
			
					
					<DeluxeRooms/>
			
				<div className="row">
					<div className="col-md-12">
						<a href=""><h1>News From Us</h1></a>
					</div>
				</div>
				
						<News/>
					
					{/* <Route path='/aboutus' component={AboutUs} />
					<Route path='/rooms' component={Room} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/blog' component={Blog} />
					<Route path='/contsct' component={Contsct} /> */}
			</div>
		</main>
	)
}

export default Main