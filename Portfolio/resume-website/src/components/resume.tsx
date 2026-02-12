import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#eee'
    },
    section: {
        margin: 5,
    },
    text: {
        color: '#000',
    }
})

export const Resume = () => {
    const Resume = (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>
                        Reed Gehling's Resume
                    </Text>
                </View>
            </Page>
        </Document>
    )

    return Resume;
};

export const ResumeDocument = Resume;