import React from 'react'
import {Link} from 'react-router-dom'
import RoomsListItem from './RoomsListItem'
import RoomsData from './RoomsData'



class Rooms extends React.Component {
	render () {
        return (
            
            <div className="row">
                <div className="col-md-12">
						<Link to='/'><h1>AWARD WINNING HOTELS</h1></Link>
				</div>
              
            <div className="row"> 
               {
                  RoomsData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>{
                       return(
                       <div className="col-md-4" key={id}>
                           <RoomsListItem 
                                name={name}
                                description={description}
                                image={image}
                                id={id}
                                type={type}
                            />
                       </div>
                  )
                })
            }
            </div>
                    <div className="col-md-12">
						<div className="btn_hotel">
							<a href=""><button type="submite"className="btn_hotel_list">MORE</button></a>
						</div>
					</div>
                    <div className="col-md-12 activities_list">
                        <a href=""><h1>Winter activities</h1></a>
                    </div>
       </div>
       )
	}
}






export default Rooms 