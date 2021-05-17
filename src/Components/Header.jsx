import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './ContextProvider';


const Header = () => {

    const [{cart}] = useStateValue();
    return (
        <nav className='header'>
            <Link to="/">
                <img src="/images/logo.png" alt= "logo" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLine1">Hello Sachin,</span>
                        <span className="header__optionLine2">Sign in</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCart />
                        <span className="header__optionLine2 header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
          
        </nav>
    )
}

export default Header
