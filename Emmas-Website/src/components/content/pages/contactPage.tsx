import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ContactForm } from '../../contact/contactFormComponent';

export const ContactPage = () => {
    return (
        <div className="contact-body-container">
            <div className="contact-body-content">
                <header className="contact-header">
                    <FormattedMessage
                        id="page.contact.header"
                        defaultMessage="Contact Us" />
                </header>

                <article className="contact-form">
                    <ContactForm />
                </article>
            </div>
        </div>
    )
};

export const ContactPageComponent = ContactPage;
