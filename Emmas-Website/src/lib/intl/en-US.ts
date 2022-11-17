type Messages = {
    header: {
        nav: {
            home: string;
            prices: string;
            contact: string;
        };
        text: string
    };
    page: {
        home: {
            body: string;
        };
        prices: {
            body: string;
        };
        contact: {
            body: string;
        };
    };
    footer: {
        text: string;
    };
};

export const messagesEnglish: Messages = {
    header: {
        nav: {
            home: 'Home',
            prices: 'Prices',
            contact: 'Contact',
        },
        text: "Emma's Interior Design",
    },
    page: {
        home: {
            body: 'Home',
        },
        prices: {
            body: 'Prices',
        },
        contact: {
            body: 'Contact',
        },
    },
    footer: {
        text: 'Footer Text',
    },
};
