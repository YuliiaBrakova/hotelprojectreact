import React from 'react'

const Header = () => {

	return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo_hotel">
                        <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="nav">
                            <a href="" className="nav_link">HOME</a>
                            <a href="" className="nav_link">ABOUT US</a>
                            <a href="" className="nav_link">ROOMS</a>
                            <a href="" className="nav_link">PORTFOLIO</a>
                            <a href="" className="nav_link">BLOG</a>
                            <a href="" className="nav_link">CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
	)
}

export default Header 