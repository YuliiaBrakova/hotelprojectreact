import React from 'react'
import DeluxeRoomsItem from './DeluxeRoomsItem'
import DeluxeRoomsData from './DeluxeRoomsData'




class DeluxeRooms extends React.Component {
	render () {
        const{
            id,
            name,
            description,
            image,
            type
        } = this.props;
		return (
			<div className="sideitem">
				<div className="item">
					<div><img src={image} alt={description} title={name} /></div>
					<div><a href=""><h4>Magna pars studiorum</h4></a></div>
					<div><p className="text_room">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                </div>
				
				<div className="item">
                    <div><img src={image} alt={description} title={name} /></div>
					<div><a href=""><h4>Magna pars studiorum</h4></a></div>
					<div><p className="text_room">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                </div>
            </div>
				
			
			<div className="mainitem"><div><img src={image} alt={description} title={name} /></div></div>
			
					
			<div className="sideitem">
				<div className="item">
					<div><img src={image} alt={description} title={name} /></div>
					<div><a href=""><h4>Magna pars studiorum</h4></a></div>
					<div><p className="text_room">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                </div>
				
				<div className="item">
                    <div><img src={image} alt={description} title={name} /></div>
					<div><a href=""><h4>Magna pars studiorum</h4></a></div>
					<div><p className="text_room">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                </div>
            </div>
				
			
		)
	}
}

export default DeluxeRooms 