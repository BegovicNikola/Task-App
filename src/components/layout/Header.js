import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = props => {
    const {logo} = props
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">{logo}</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Add</Link>
                        <Link to="/" className="nav-link">Tasks</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    logo: 'ReactApp'
}

Header.propTypes = {
    logo: PropTypes.string.isRequired
}

export default Header