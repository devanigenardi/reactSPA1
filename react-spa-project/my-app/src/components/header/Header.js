import React from 'react'
import Logo from '../../files/images/react-logo.png'
import '../header/styles.css'


const Header = () => {
    return (
        <div className="row">
            <header className="col-sm">
                <img className={"mx-auto"} src={Logo} alt="logo" />
            </header>
        </div>
    )
}

export default Header;