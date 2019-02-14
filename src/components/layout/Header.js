import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    const {logo} = props
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">{logo}</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">About</a>
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