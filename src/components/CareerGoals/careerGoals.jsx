import './careerGoals.scss'
import {memo} from 'react'
import iconCareer from '../../assets/iconTitle/target.png'
function CareerGoals({data, language}) {
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