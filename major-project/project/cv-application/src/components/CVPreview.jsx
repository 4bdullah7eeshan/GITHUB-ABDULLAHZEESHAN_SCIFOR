function CVPreview({ userData }) {
    const { name, email, phone, education, experience, projects, skills } = userData;

    return (
        <section className="cv-preview">
            <div className="resume-header">
                <h2>{name}</h2>
                <div className="resume-contact-info">
                    <p>{email}</p>
                    <p> | </p>
                    <p>{phone}</p>
                </div>

            </div>
            <hr />
            <div className="resume-education-section">
                <h4>EDUCATION</h4>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index}>
                            <p><strong>{edu.school}</strong></p>
                            <div className="fr">
                                <p><em>{edu.title}</em></p>
                                <p>{edu.date}</p>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p>No education details provided</p>
                )}
            </div>
            <br />
            <div className="resume-experience-section">
                <h4>EXPERIENCE</h4>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index}>
                            <p><strong>{exp.company}</strong></p>
                            <div className="fr">
                                <p><em>{exp.position}</em></p>
                                <p>{exp.fromDate} - {exp.toDate}</p>
                            </div>
                            <p>{exp.responsibilities}</p>
                        </div>
                    ))
                ) : (
                    <p>No experience details provided</p>
                )}
            </div>
            <br />
            <div className="resume-projects-section">
                <h4>PROJECTS</h4>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div key={index}>
                            <div className="fr">
                                <p><strong>{project.title}</strong></p>
                                <p><em>{project.technologies.join(', ')}</em></p>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No projects provided</p>
                )}
            </div>
            <br />
            <div className="resume-skills-section">
                <h4>SKILLS</h4>
                {skills.length > 0 ? (
                    <p>{skills.join(', ')}</p>
                ) : (
                    <p>No skills provided</p>
                )}
            </div>

        </section>
    );
};

export default CVPreview;
