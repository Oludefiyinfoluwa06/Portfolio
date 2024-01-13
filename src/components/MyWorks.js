import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ggnf from '../assets/img/portfolio/ggnf.png';
import hoobank from '../assets/img/portfolio/hoobank.png';
import movieApp from '../assets/img/portfolio/movie-app.png';
import niphal from '../assets/img/portfolio/niphal.png';
import school from '../assets/img/portfolio/school.png';
import travel from '../assets/img/portfolio/travel.webp';

const MyWorks = () => {
    const works = [
        {
            id: 1,
            img: ggnf,
            info: "A child's foundation website built using HTML, CSS, JavaScript and PHP",
            glink: "https://github.com/Oludefiyinfoluwa06/ggnf/",
            wlink: "https://ggnffoundation.com/"
        },
        {
            id: 2,
            img: hoobank,
            info: "React banking web application project",
            glink: "https://github.com/Oludefiyinfoluwa06/hoobank/",
            wlink: ""
        },
        {
            id: 3,
            img: movieApp,
            info: "Movie app built using react JS",
            glink: "https://github.com/Oludefiyinfoluwa06/movie-app/",
            wlink: ""
        },
        {
            id: 4,
            img: niphal,
            info: "Niphal web design built using HTML, CSS",
            glink: "https://github.com/Oludefiyinfoluwa06/niphal/",
            wlink: "https://theniphalweb.web.app/"
        },
        {
            id: 5,
            img: school,
            info: "School website built using React JS",
            glink: "https://github.com/Oludefiyinfoluwa06/school-website/",
            wlink: "https://school-coe.web.app/"
        },
        {
            id: 6,
            img: travel,
            info: "Front-end Travel website built using HTML, CSS",
            glink: "https://github.com/Oludefiyinfoluwa06/ggnf/",
            wlink: "https://the-pearl-travel-and-tours.web.app/"
        }
    ];

    return (
        <div className='works'>
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
