import React from 'react';
import { FormattedMessage } from 'react-intl'
import { NavigationBar } from './navigationComponent';

export const Header = () => {
    return (
        <div className='header-main'>
            <div className='header-banner'>
                <FormattedMessage
                    id="header.text"
                    defaultMessage="Emma's Interior Design" />
            </div>
            <div className='header-navigation'>
                <NavigationBar />
            </div>
        </div>
    );
};

export const HeaderComponent = Header;