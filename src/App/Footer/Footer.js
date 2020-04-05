import React from 'react'

const Footer = () => {
	return (
		<footer className="footer">
				<div className="container">
		<div className="row">
			<div className="col-md-5">
				<div className="logo_footer">
					<a href="index.html"><img src="images/footer.png" alt="logo"/></a>
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
						<li><a href="" className="social_facebook"><i className="fa fa-facebook fa-fw"></i></a></li>
						<li><a href="" className="social_vk"><i className="fa fa-vk fa-fw"></i></a></li>
						<li><a href="" className="social_insta"><i className="fa fa-instagram fa-fw"></i></a></li>
						<li><a href="" className="social_youtube"><i className="fa fa-youtube fa-fw"></i></a></li>
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