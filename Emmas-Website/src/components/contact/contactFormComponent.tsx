import React from 'react';
import { FormattedMessage } from 'react-intl';

const ContactFormComponent = () => {
    return (
        <article className="contact-form-container">
            <div className="contact-form-main">
                <div className="contact-form-name-container">
                    <section className="contact-form-name-field contact-form-first-name">
                        <label htmlFor='firstNameInput'>
                            <div className="contact-form-first-name-label">
                                <FormattedMessage
                                    id="contact.firstNameLabel"
                                    defaultMessage="First Name" />
                            </div>
                            <input type="text" name="first name" id="firstNameInput" />
                        </label>
                    </section>
                    <section className="contact-form-name-field contact-form-last-name">
                        <label htmlFor='lastNameInput'>
                            <div className="contact-form-last-name-label">
                                <FormattedMessage
                                    id="contact.lastNameLabel"
                                    defaultMessage="Last Name" />
                            </div>
                            <input type="text" name="last name" id="lastNameInput" />
                        </label>
                    </section>
                </div>

                <div className="contact-form-field contact-form-email">
                    <label htmlFor='emailAddressInput'>
                        <div className="contact-form-email-address-label">
                            <FormattedMessage
                                id='contact.emailLabel'
                                defaultMessage='Email Address' />
                        </div>
                        <input type="email" name='email address' id='emailAddressInput' />
                    </label>
                </div>
                <div className="contact-form-field contact-form-message">
                    <label htmlFor='contactMessage'>
                        <textarea id='contactMessage' placeholder="What's on your mind?" cols={50} rows={10}></textarea>
                    </label>
                </div>
            </div>
            <div className="contact-form-submit">
                <button className="contact-form-submit__button">
                    <FormattedMessage
                        id="contact.buttonText"
                        defaultMessage="Submit" />
                </button>
            </div>
        </article>
    )
};

export const ContactForm = ContactFormComponent;