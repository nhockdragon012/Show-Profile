import './careerGoals.scss'
import {memo, useContext} from 'react'
import iconCareer from '../../assets/iconTitle/target.png'
import {IsToggle} from '../ToggleContext'
function CareerGoals({data}) {
    const {language} = useContext(IsToggle)
    
    return (
        <div className="container__section career-goals ">
            <div className="title-box">
                <img src={iconCareer} alt="career goals.png" className="title-icon" />
                <h1 className="title">{language === 'vi' ? 'Mục tiêu bản thân' : 'Career Goals'}</h1>
            </div>
            <div className="career-goals__term short-term ">
                <h4 className="title">{data.shortTerm.title}</h4>
                <p className="text">{data.shortTerm.text}</p>
            </div>
            <div className="career-goals__term long-term">
                <h4 className="title">{data.longTerm.title}</h4>
                <p className="text">{data.longTerm.text}</p>
            </div>
        </div>
    )
}
export default memo(CareerGoals)