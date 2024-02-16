import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ggnf from '../assets/img/portfolio/ggnf.png';
import hoobank from '../assets/img/portfolio/hoobank.png';
import movieApp from '../assets/img/portfolio/movie-app.png';
import niphal from '../assets/img/portfolio/niphal.png';
import school from '../assets/img/portfolio/school.png';
import otm from '../assets/img/portfolio/otm.png';

const MyWorks = () => {
    const workRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const work = workRef.current;

        work.classList.remove('visible-work');

        setTimeout(() => {
            work.classList.add('visible-work');
        }, 100);
    }, [location.pathname]);

    const works = [
        {
            id: 1,
            img: ggnf,
            info: "Child Foundation's Website: HTML, CSS, JS, PHP",
            glink: "https://github.com/Oludefiyinfoluwa06/ggnf/",
            wlink: "https://ggnffoundation.com/"
        },
        {
            id: 2,
            img: hoobank,
            info: "React Banking Web App Project",
            glink: "https://github.com/Oludefiyinfoluwa06/hoobank/",
            wlink: ""
        },
        {
            id: 3,
            img: movieApp,
            info: "React JS Movie App",
            glink: "https://github.com/Oludefiyinfoluwa06/movie-app/",
            wlink: ""
        },
        {
            id: 4,
            img: niphal,
            info: "Niphal Web Design: HTML, CSS Project",
            glink: "https://github.com/Oludefiyinfoluwa06/niphal/",
            wlink: "https://niphal.com.ng"
        },
        {
            id: 5,
            img: school,
            info: "School Website: React JS Project",
            glink: "https://github.com/Oludefiyinfoluwa06/school-website/",
            wlink: "https://school-coe.web.app/"
        },
        {
            id: 6,
            img: otm,
            info: "Task Management Web App",
            glink: "https://github.com/Oludefiyinfoluwa06/Task-Management-App/",
            wlink: "https://ofto-task-manager.vercel.app/"
        }
    ];

    return (
        <div className='works' ref={workRef}>
            {works.map(work => (
                <div className="work" key={work.id}>
                    <img src={work.img} alt="Work" />
                    <div className="info">
                        <p>{work.info}</p>
                        <div className="links">
                            <Link to={work.glink} title='Github Link'><FaGithub /></Link>
                            <Link to={work.wlink} title='Website Link'><FaLink /></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyWorks;
