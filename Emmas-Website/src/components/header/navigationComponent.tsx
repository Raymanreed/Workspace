import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <nav className="navigation-container">
            <NavLink className="nav-button" to="/">
                <FormattedMessage
                    id="header.nav.home"
                    defaultMessage="Home" />
            </NavLink>
            <NavLink className="nav-button" to="/amenities">
                <FormattedMessage
                    id="header.nav.amenities"
                    defaultMessage="Amenities" />
            </NavLink>
            <NavLink className="nav-button" to="/contact">
                <FormattedMessage
                    id="header.nav.contact"
                    defaultMessage="Contact" />
            </NavLink>
        </nav>
    )
}

export const NavigationComponent = NavigationBar;
