import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './header.css'


function Header(){
    return(
        <nav className="header">
            <img className="logo" src="https://active8studios.co.uk/wp-content/uploads/Amazon-Logo-schwarz.jpg" />
           <div className="search">
               <input type="text" className="header__sinput" />
               <SearchIcon className="icon" />
           </div>
            <div className="header1">
                <span className="header2">Hello users </span>
                <span className="header3">Sign in or Sign out</span>

            </div>

        </nav>
    )
}

export default Header