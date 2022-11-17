import React from 'react';
import { FormattedMessage } from 'react-intl';

// Interface example for reference
// interface HomePageProps {
//     intl: any;
// }

export const HomePage = () => {
    return (
        <div className="homepage-body-container">
            <div className="homepage-body-content">
                <FormattedMessage
                    id="page.home.body"
                    defaultMessage="Home" />
            </div>
        </div>
    )
};

export const HomePageComponent = HomePage