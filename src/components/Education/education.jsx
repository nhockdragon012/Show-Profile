import './education.scss'
import {memo, useContext} from 'react'
import iconEducation from '../../assets/iconTitle/education.png'
import {IsToggle} from '../ToggleContext'
function Education({data}) {
    const {language} = useContext(IsToggle)
    return (
        <div className="container__section education">  
            <div className="title-box">
                <img src={iconEducation} alt="about me icon.png" className="title-icon"/>
                <h1 className="title">{language === 'vi' ? 'Học vấn' : 'Education'}</h1>
            </div>
            <div className="education__box">
                {data.school.map((d, i) => {
                    return <div className="education__item" key={i}>
                        <h4 className="text-box">{d.name}</h4>
                        <p className="majored">{language === 'vi' ? '- Chuyên nghành: ' : '- Majored: '} {d.majored}</p>
                        <p className="time">
                            <span className="text">{d.time} </span>
                            {d.note && <span className="note"> ({d.note})</span>}
                        </p>
                    </div>
                })}
            </div>
                
        </div>
    )
}
export default memo(Education)