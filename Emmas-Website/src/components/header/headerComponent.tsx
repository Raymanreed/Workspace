import React from 'react';
import { FormattedMessage } from 'react-intl'
import { NavigationBar } from './navigationComponent';

export const Header = () => {
    return (
        <div className='header-main'>
            <div className='header-banner'>
                <div className="header-banner__brand-text">
                    <FormattedMessage
                        id="header.text"
                        defaultMessage="Emma's Interior Design" />
                </div>
            </div>
            <div className='header-navigation'>
                {/* TODO: add text for left side of bar ie: title/brand */}
                <NavigationBar />
            </div>
        </div>
    );
};

export const HeaderComponent = Header;