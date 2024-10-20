import { useState } from 'react';
import UserInput from "./UserInput";
import CVPreview from "./CVPreview";
import sampleCV from '../data/sampleCV';

function Main() {
    const [userData, setUserData] = useState(sampleCV);

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Here name is the HTML attribute from input element
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleArrayInputChange = (e, section, index) => {
        const { name, value } = e.target;
        setUserData((prevData) => {
            const updatedSection = [...prevData[section]];
            updatedSection[index] = {
                ...updatedSection[index],
                [name]: value,
            };
            return {
                ...prevData,
                [section]: updatedSection,
            };
        });
    };

    const addNewSection = (section) => {
        setUserData((prevData) => ({
            ...prevData,
            [section]: [
                ...prevData[section],
                section === 'education'
                    ? { school: '', title: '', date: '' }
                    : section === 'experience'
                    ? { company: '', position: '', responsibilities: '', fromDate: '', toDate: '' }
                    : section === 'projects'
                    ? { title: '', description: '', technologies: [] }
                    : null,
            ],
        }));
    };

    const removeSection = (section, index) => {
        setUserData((prevData) => {
            const updatedSection = prevData[section].filter((_, i) => i !== index);
            return {
                ...prevData,
                [section]: updatedSection,
            };
        });
    };

    const handleSkillsChange = (e, index) => {
        const { value } = e.target;
        setUserData((prevData) => {
            const updatedSkills = [...prevData.skills];
            updatedSkills[index] = value;
            return {
                ...prevData,
                skills: updatedSkills,
            };
        });
    };
    
    const addNewSkill = () => {
        setUserData((prevData) => ({
            ...prevData,
            skills: [...prevData.skills, ''],
        }));
    };
    
    const removeSkill = (index) => {
        setUserData((prevData) => {
            const updatedSkills = prevData.skills.filter((_, i) => i !== index);
            return {
                ...prevData,
                skills: updatedSkills,
            };
        });
    };
    
    
    return (
        <main>
            <UserInput
                userData={userData}
                handleInputChange={handleInputChange}
                handleArrayInputChange={handleArrayInputChange}
                addNewSection={addNewSection}
                removeSection={removeSection}
                setUserData={setUserData}
                handleSkillsChange={handleSkillsChange}
                addNewSkill={addNewSkill}
                removeSkill={removeSkill}
            />
            <CVPreview userData={userData} />
        </main>
    );
}

export default Main;