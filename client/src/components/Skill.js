import React from 'react';

const Skill = ({ forwardedRef }) => {
    const skills = [
        {
            id: 1,
            title: "HTML",
            progress: 90
        },
        {
            id: 2,
            title: "CSS",
            progress: 86
        },
        {
            id: 3,
            title: "Bootstrap",
            progress: 70
        },
        {
            id: 4,
            title: "Tailwind CSS",
            progress: 70
        },
        {
            id: 5,
            title: "JavaScript",
            progress: 75
        },
        {
            id: 6,
            title: "React JS",
            progress: 80
        },
        {
            id: 7,
            title: "Node JS",
            progress: 50
        },
    ];

    return (
        <div className='my-skill' ref={forwardedRef}>
            {skills.map(skill => (
                <div className="skill" key={skill.id}>
                    <div className="skill-head">
                        <p>{skill.title}</p>
                        <p>{skill.progress}%</p>
                    </div>
                    <progress className='custom-progress' value={skill.progress} max="100" />
                </div>
            ))}
        </div>
    );
}

export default Skill;
