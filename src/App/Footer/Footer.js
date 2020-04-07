import React from 'react'
import { SocialIcon } from 'react-social-icons'

import Logo from './../Header/Logo/Logo'
import facebook from './icons/fb.svg'
import twitter from './icons/tw.svg'
import google from './icons/google.svg'
import instagram from './icons/insta.svg'

const Footer = () => {
	return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="logo_footer">
								<Logo/>
							</div>
							<div className="location"><img src="images/footer(1).png"/>123, Main Street, NY 456789</div>
							<div className="phone"><img src="images/footer(2).png"/>+12 345 67890</div>
							<div className="mail"><img src="images/footer(3).png"/>free@psd.in.ua</div>
					</div>
					<div className="col-md-6">
						<div className="footer_menu">
							<ul>
								<li><a href="" className="footer_menu_link">HOME</a></li>
								<li><a href="" className="footer_menu_link">ABOUT US</a></li>
								<li><a href="" className="footer_menu_link">ROOMS</a></li>
								<li><a href="" className="footer_menu_link">PORTFOLIO</a></li>
								<li><a href="" className="footer_menu_link">BLOG</a></li>
								<li><a href="" className="footer_menu_link">BLOG</a></li>
								<li><a href="" className="footer_menu_link">CONTACT</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-5 social">
						<a href=""><h4>We are in social networks</h4></a>
						<div className="social_menu">
							<ul>
							<li><a href="" className="social_facebook"><img src={facebook} alt='fb' /></a></li>
							<li><a href="" className="social_vk"><img src={twitter} alt='tw' /></a></li>
							<li><a href="" className="social_insta"><img src={instagram} alt='insta' /></a></li>
							<li><a href="" className="social_google"><img src={google} alt='google' /></a></li>
							</ul>
						</div>
					</div>
					</div>
					<div className="row">
					<div className="col-md-12 copy"> Copyright 2018. PSD.IN.UA  All Right Reserved </div>
					</div>
				</div>
			</footer>
	)
}

export default Footer