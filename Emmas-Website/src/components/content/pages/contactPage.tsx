import React from 'react';
import { FormattedMessage } from 'react-intl';

export const ContactPage = () => {
    return (
        <div className="contact-body-container">
            <div className="contact-body-content">
                <FormattedMessage
                    id="page.contact.body"
                    defaultMessage="Contact" />
            </div>
        </div>
    )
};

export const ContactPageComponent = ContactPage