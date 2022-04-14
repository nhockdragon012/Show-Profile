import './skills.scss'
import {memo} from 'react'
import iconSkills from '../../assets/iconTitle/skills.png'
function Skills({data, language}) {
    return (
        <div className="container__section skills ">
            <div className="title-box">
                <img src={iconSkills} alt="about me icon.png" className="title-icon"/>
                <h1 className="title">{language === 'vi' ? 'Kỹ năng' : 'Skills'}</h1>
            </div>
            <div className="skills__box">
                <div className="skills__item programming">
                    <h4 className="skills__title">{language === 'vi' ? 'Lập trình' : 'Programming'}</h4>
                    <div className="skills__content">
                        {data.programming.map((p, i) => {
                            return <div className="skill-item" key={i}>
                                <img src={p.img} alt={p.name} className="icon" />
                                <p className="text">{p.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="skills__item design">
                <h4 className="skills__title">{language === 'vi' ? 'Thiết kế' : 'Design'}</h4>
                    <div className="skills__content">
                        {data.design.map((p, i) => {
                            return <div className="skill-item" key={i}>
                                <img src={p.img} alt={p.name} className="icon" />
                                <p className="text">{p.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="skills__item office">
                <h4 className="skills__title">{language === 'vi' ? 'Tin học văn phòng' : 'Office'}</h4>
                    <div className="skills__content">
                        {data.office.map((p, i) => {
                            return <div className="skill-item" key={i}>
                                <img src={p.img} alt={p.name} className="icon" />
                                <p className="text">{p.name}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default memo(Skills)