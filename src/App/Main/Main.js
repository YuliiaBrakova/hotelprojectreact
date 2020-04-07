import React from 'react'

import {Route} from 'react-router-dom'



import BookingBar from './BookingBar/BookingBar'
import Rooms from './Rooms/Rooms'
import Actvities from './Activities/Activities'
import DeluxeRooms from './DeluxeRooms/DeluxeRooms'
import News from './News/News'
import RoomsDeluxePage from './RoomsDeluxePage/RoomsDeluxePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import PortfolioPage from './PortfolioPage/PortfolioPage'
import BlogPage from './BlogPage/BlogPage'
import ContactPage from './ContactPage/ContactPage'

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
				<Route exact path='/' component={News} />
				<Route path='/aboutus' component={AboutUsPage} />
				<Route path='/rooms' component={RoomsDeluxePage} />
				<Route path='/portfolio' component={PortfolioPage} />
				<Route path='/blog' component={BlogPage} />
				<Route path='/contact' component={ContactPage} />  
			</div>
		</main>
	)
}

export default Main