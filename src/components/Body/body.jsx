import {getProfile} from '../myCV'
import {useEffect, useState, useContext} from 'react'
import {IsToggle} from '../ToggleContext'
import './body.scss'
import AboutMe from '../AboutMe/aboutMe'
import CareerGoals from '../CareerGoals/careerGoals'
import Skills from '../Skills/skills'
import Project from '../Project/project'
import Education from '../Education/education'
import Hobbies from '../Hobbies/hobbies'
import Form from '../Form/form'
function Body() {
    const {language} = useContext(IsToggle)
    const [data, setData] = useState()

    //Fake API
    useEffect(() => {
        const getData = async () => {
            const data = await getProfile(language)
            setData(data)
        }
        getData()
    },[language])

    return (
        <div className="container">
                {data && data.length > 0 && <>
                    <div className="row md-8">
                        <AboutMe data={data[1]}/> 
                        <Skills data={data[3]}/>
                        <Project data={data[4]}/>
                    </div>
                    <div className="row md-4">
                        <CareerGoals data={data[2]}/>
                        <Form language={language}/>
                        <Education data={data[5]}/>
                        <Hobbies data={data[6]} />
                    </div>
                    <div className="row md-12">
                        
                    </div>
                    {/* <WorkExperience data={data[6]}/> */}
                </>
                }
        </div>
    )
}
export default Body

/*
    Bên trái : About me, Project, Skill 
    Bên phải: Mục tiêu, education, WorkExperience, Hobbies
*/ 