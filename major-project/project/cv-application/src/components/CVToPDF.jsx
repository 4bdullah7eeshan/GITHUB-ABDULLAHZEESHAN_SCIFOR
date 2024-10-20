import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Spectral',
    fonts: [
        { src: '/fonts/Spectral/Spectral-Regular.ttf' },
        { src: '/fonts/Spectral/Spectral-Bold.ttf', fontWeight: 'bold' },
        { src: '/fonts/Spectral/Spectral-Italic.ttf', fontStyle: 'italic' }

    ],
});

Font.register({
    family: 'Spectral SC',
    fonts: [
        { src: '/fonts/Spectral_SC/SpectralSC-Regular.ttf' },
        { src: '/fonts/Spectral_SC/SpectralSC-Bold.ttf', fontWeight: 'bold' },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Spectral',
        fontSize: 12,
        lineHeight: 1.5,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Spectral SC',
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',

    },
    sectionTitle: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'Spectral',
    },
    section: {
        marginBottom: 10,
    },
    entry: {
        marginBottom: 5,
    },
    entryTitle: {
        fontWeight: 'bold',
    },
    entryText: {
        marginBottom: 2,
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10,
    },
    fr: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const CVToPDF = ({ userData }) => {
    const { name, email, phone, education, experience, projects, skills } = userData;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.contact}>
                            <Text style={{ marginRight: 10 }}>{email}</Text>
                            <Text> | </Text>
                            <Text>{phone}</Text>
                        </View>
                    </View>

                    <View style={styles.horizontalLine} /> {/* Horizontal line */}

                    <Text style={styles.sectionTitle}>EDUCATION</Text>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <View key={index} style={styles.entry}>
                                <Text style={styles.entryTitle}>{edu.school}</Text>
                                <View style={styles.fr}>
                                    <Text style={[styles.entryText, { fontStyle: 'italic' }]}>{edu.title}</Text>
                                    <Text style={styles.entryText}>{edu.date}</Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text>No education details provided</Text>
                    )}
                    <Text style={[styles.sectionTitle, { marginTop: 15 }]}>EXPERIENCE</Text>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <View key={index} style={styles.entry}>
                                <Text style={styles.entryTitle}>{exp.company}</Text>
                                <View style={styles.fr}>
                                    <Text style={[styles.entryText, { fontStyle: 'italic' }]}>{exp.position}</Text>
                                    <Text style={styles.entryText}>{exp.fromDate} - {exp.toDate}</Text>
                                </View>
                                <Text style={styles.entryText}>{exp.responsibilities}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No experience details provided</Text>
                    )}
                    <Text style={[styles.sectionTitle, { marginTop: 15 }]}>PROJECTS</Text>
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <View key={index} style={styles.entry}>
                                <View style={styles.fr}>
                                    <Text style={styles.entryTitle}>{project.title}</Text>
                                    <Text style={[styles.entryText, { fontStyle: 'italic' }]}>{project.technologies.join(', ')}</Text>
                                </View>
                                <Text style={styles.entryText}>{project.description}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No projects provided</Text>
                    )}

                    <Text style={[styles.sectionTitle, { marginTop: 15 }]}>SKILLS</Text>
                    {skills.length > 0 ? (
                        <Text>{skills.join(', ')}</Text>
                    ) : (
                        <Text>No skills provided</Text>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default CVToPDF;
