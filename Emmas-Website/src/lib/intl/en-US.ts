type Messages = {
    header: {
        nav: {
            home: string;
            amenities: string;
            contact: string;
        };
        text: string;
    };
    page: {
        home: {
            body: string;
        };
        amenities: {
            body: string;
        };
        contact: {
            header: string;
            firstNameLabel: string;
            lastNameLabel: string;
            emailLabel: string;
            buttonText: string;
        };
    };
    footer: {
        contact: {
            emailAddress: string;
            phoneNumber: string;
        }
    };
};

export const messagesEnglish: Messages = {
    header: {
        nav: {
            home: 'Home',
            amenities: 'Amenities',
            contact: 'Contact',
        },
        text: "Emma's Interior Design",
    },
    page: {
        home: {
            body: 'Home',
        },
        amenities: {
            body: 'Amenities',
        },
        contact: {
            header: 'Contact Us',
            firstNameLabel: 'First Name',
            lastNameLabel: 'Last Name',
            emailLabel: 'Email Address',
            buttonText: 'Submit',
        },
    },
    footer: {
        contact: {
            emailAddress: 'emmylouerickson@gmail.com',
            phoneNumber: '(555)555-5555',
        },
    },
};
