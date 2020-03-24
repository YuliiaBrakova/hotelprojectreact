import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () => {

	return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Logo/>
                    </div>
                    <div className="col-md-10">
                        <Menu/>
                    </div>
                </div>
            </div>
        </header>
	)
}

export default Header 