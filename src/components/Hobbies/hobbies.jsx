import iconHobby from '../../assets/iconTitle/hobbies.png'
import './hobbies.scss'
import {memo} from 'react'
function Hobbies({data, language}) {
    return (
        <div className="container__section hobby">
            <div className="title-box">
                <img src={iconHobby} alt="about me icon.png" className="title-icon"/>
                <h1 className="title">{language === 'vi' ? 'Sở thích: ' : 'Hobbies'}</h1>
            </div>
            <div className="hobby-box">
                {
                    data.Hobbies.map((hobby, index) => {
                        return <div className="hobby-item" key={index}>
                            <img src={hobby.icon} alt="hobby.png" className="icon" />
                            <p className="text">{hobby.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default memo(Hobbies)