import * as React from 'react';
import { FormattedMessage } from 'react-intl';



export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-contact-information">
                    <div className="footer-contact-information__emailAddress">
                        <FormattedMessage
                            id="footer.contact.emailAddress"
                            defaultMessage="emmylouerickson@gmail.com" />
                    </div>
                    <div className="footer-contact-information__phoneNumber">
                        <FormattedMessage
                            id="footer.contact.phoneNumber"
                            defaultMessage="(555)555-5555" />
                    </div>
                </div>

                <div className="footer-social-links">
                    <div className="footer-social-links__facebook social-link-image">
                        <img className="footer-social-links__facebook-img" alt="Facebook Icon" src='/image/social/facebookIcon.png' />
                    </div>
                    <div className="footer-social-links__twitter social-link-image">
                        <img className="footer-social-links__twitter-img" alt="Twitter Icon" src='/image/social/twitterIcon.png' />
                    </div>
                    <div className="footer-social-links__instagram social-link-image">
                        <img className="footer-social-links__instagram-img" alt="Instagram Icon" src='/image/social/instagramIcon.png' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export const FooterComponent = Footer;
