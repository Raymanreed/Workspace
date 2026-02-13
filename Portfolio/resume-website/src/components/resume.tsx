import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 5,
        textAlign: 'left',
    },
    contactSection: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    titleSection: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    skillsSection: {
        textAlign: 'left',
    },
    contactText: {
        display: 'flex',
        flexDirection: 'column',
        color: '#000',
        font: 'Arial',
        fontSize: 10,
        lineHeight: 1.2,
    },
    titleText: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    skillsTextA: {
        color: '#000',
        fontSize: 14,
        fontStyle: 'oblique',
        fontWeight: 'bold',
    },
    skillsTextB: {
        color: '#000',
        fontSize: 10,
    }
})

export const Resume = () => {
    const Resume = (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.contactSection}>
                    <Text style={styles.contactText}>
                        <a href="mailto:reed.gehling@gmail.com" rel='external' target='_blank'>reed.gehling@gmail.com</a>{`\n`}
                        <a href="https://github.com/Raymanreed" rel='external' target='_blank'>Github</a><br />
                        <a href="https://www.linkedin.com/in/reed-gehling-428115257" rel='external' target='_blank'>LinkedIn</a><br />
                        503-888-7981
                    </Text>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>
                        Reed Gehling's Resume
                        <br />
                        <hr />
                    </Text>
                </View>
                <View style={styles.skillsSection}>
                    <Text style={styles.skillsTextA}>Skills:</Text>
                    <br />
                    <Text style={styles.skillsTextB}>
                        HTML, CSS3, Tailwind, Python, React, Javascript, NextJS, Typescript, Frontend Development, Web Development, Customer Service, Version Control (Git), WordPress, Agile, Scrum, Microsoft Excel, MS Office
                    </Text>
                    <hr />
                </View>
            </Page>
        </Document>
    )

    return Resume;
};

export const ResumeDocument = Resume;