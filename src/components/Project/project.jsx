import React, {memo} from 'react'
import './project.scss'
import iconProject from '../../assets/iconTitle/project.png'
function Project({data, language}) {
    return (
        <div className="container__section project ">
            <div className="title-box">
                <img src={iconProject} alt="project icon.png" className="title-icon"/>
                <h1 className="title">{language === 'vi' ? 'Dự án' : 'Projects'}</h1>
            </div>
            <div className="project__box">
                {
                    data.Projects.map((project, index) => {
                    return <div className="project-item" key={index}>
                            <div className="left-project" >
                                <h4 className="title-project">{project.name}</h4>
                                <ul className="list">
                                    {project.desc.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                            </div>
                            <div className="right-project">
                                <img src={project.img} alt="" className="thumbs" />
                                <div className="link-box">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-website">Live</a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="source-code">Source Code</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default memo(Project)