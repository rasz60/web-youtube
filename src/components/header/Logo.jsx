import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em>3ik</em>  
                <span>Hestia502</span>
            </Link>
        </h1>
    )
}

export default Logo