import React from 'react'



class BookingBar extends React.Component {
	render () { 
    return (
        <div className="row">   
            <div className="booking_bar">
                <form action="">
                    <input type="text" placeholder="Arrivall" className="search_option"/>
                    <input type="text" placeholder="Departure"/>
                    <input type="text" placeholder="Chosse a Room"/>
                    <input type="text" placeholder="State"/>

                    <a href=""><button className="btn_booking_bar" type="submite">BOOK NOW</button></a>
                </form>
            </div>
        </div> 
    )
}
    }
export default BookingBar 