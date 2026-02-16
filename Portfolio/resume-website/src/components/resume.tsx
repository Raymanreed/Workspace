import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        color: '#000',
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
    experienceSection: {
    },
    jobTitleDateSection: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    contactText: {
        display: 'flex',
        flexDirection: 'column',
        font: 'Arial',
        fontSize: 10,
        lineHeight: 1.2,
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleTextB: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    skillsTextB: {
        fontSize: 10,
    },
    companyTitleText: {
        fontSize: 13,
    },
    jobTitleText: {
        fontSize: 11,
    },
    jobDateText: {
        fontSize: 10,
    },
    jobBulletText: {
        fontSize: 9,
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
                    <Text style={styles.titleTextB}>Skills:</Text>
                    <br />
                    <Text style={styles.skillsTextB}>
                        HTML, CSS3, Tailwind, Python, React, Javascript, NextJS, Typescript, Frontend Development, Web Development, Customer Service, Version Control (Git), WordPress, Agile, Scrum, Microsoft Excel, MS Office
                    </Text>
                    <hr />
                </View>
                <View style={styles.experienceSection}>
                    <Text style={styles.titleTextB}>Experience:</Text>
                    <br />
                    <Text style={styles.companyTitleText}>xAI</Text>
                    <br />
                    <View style={styles.jobTitleDateSection}>
                        <Text style={styles.jobTitleText}>AI Tutor</Text>
                        <Text style={styles.jobDateText}>November 2024 - September 2025</Text>
                    </View>
                    <Text style={styles.jobBulletText}>
                        <ul>
                            <li>Work collaboratively with others to provide clarity and joint learning.</li>
                            <li>Label AI tasks efficiently, accurately, and concisely to provide feedback to the model for further improvements.</li>
                            <li>Participated in pilot programs providing feedback, insight, and recommendations for continued development of said programs.</li>
                            <li>Review other's work to ensure that it is accurate, and fitting within the guidelines of a given project.</li>
                            <li>Provide feedback to leadership that is clear, concise, and effective at communicating what is or isn't working within a given project.</li>
                        </ul>
                    </Text>
                </View>
            </Page>
        </Document>
    );

    return Resume;
};

export const ResumeDocument = Resume;