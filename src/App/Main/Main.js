import React from 'react'

import {Route} from 'react-router-dom'



import BookingBar from './BookingBar/BookingBar'
import Rooms from './Rooms/Rooms'
import Actvities from './Activities/Activities'
import DeluxeRooms from './DeluxeRooms/DeluxeRooms'
import News from './News/News'
import RoomsDeluxeList from './RoomsDeluxeList/RoomsDeluxeList'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<Route exact path='/' component={BookingBar} />
				<Route exact path='/' component={Rooms} />
			</div>
				<Route exact path='/' component={Actvities} />			
			<div className="container">

				<Route exact path='/' component={DeluxeRooms} />
				<Route  path='/aboutus' component={News} />
				
				<Route path='/rooms' component={RoomsDeluxeList} />
				{/* <Route path='/rooms' component={Room} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/blog' component={Blog} />
				<Route path='/contsct' component={Contsct} />  */}
			</div>
		</main>
	)
}

export default Main