import React from 'react';

import './Contact.css'


class ContactPage extends React.Component {
	render () {
		return (
			<div className="col-md-12">
                    <a href=""><h1>Contact us</h1></a>
                <form className="decor" action='/'>
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <input  type="text" placeholder="Username"/>
                        <input  type="email" placeholder="Email"/>
                        <textarea placeholder="Сообщение..." rows="3"></textarea>
                        <input readOnly type="submit" value="Отправить"/>
                    </div>
                </form>
			</div>
		)
	}
}

export default ContactPage;