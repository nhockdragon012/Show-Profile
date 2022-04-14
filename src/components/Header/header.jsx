import {getProfile} from '../myCV'
import { useEffect, useState, useContext, memo } from 'react'
import './header.scss'
import {IsToggle} from '../ToggleContext'

function Header() {
    const [data, setData] = useState()
    const {language, toggleTheme, setToggleTheme, setLanguage } = useContext(IsToggle)

    //Fake API
    useEffect(() => {
        const getDataInformation = async() => {
            const data = await getProfile(language)
            setData(data[0]);
        }
        getDataInformation()
    },[language])

    // Handle Toggle
    const handleChangeMode = () => { 
        const btnBoxToggleTheme = document.querySelector('.btn-theme-mode')
        btnBoxToggleTheme.classList.toggle('active')
        setToggleTheme(toggleTheme === 'dark' ? 'light': 'dark')
    }
  
    const handleChangeLanguage = () => {
        const btnChangeLanguage = document.querySelector('.btn-change-language')
        btnChangeLanguage.classList.toggle('active')
        setLanguage(language === 'vi' ? 'en': 'vi')
    }
    
    const { avatar, jobCurrent, name, email, phoneNumber, address, birthDay } = data ? data : ''
    return (
        <header>
            <div className="bg-header">
                {toggleTheme === 'dark' && <div className="overlay"></div>}
            </div>
            <div className="information-wrapper">
                <div className="information__intro">
                    <div className="intro__image"><img src={avatar} alt="avatar.jpg"></img></div>
                    <div className="intro__box --ml-24">
                        <div className="box__name">{name}</div>
                        <div className="box__job-current">{jobCurrent}</div>
                        <div className="box__icon-social"></div>
                    </div>
                    
                </div>
                <div className="information__contact">
                    <div className="contact__item email">
                        <p className="title">Email:</p>
                        <p className="text">{email}</p>
                    </div>
                    <div className="contact__item birth-day">
                        <p className="title">{language === 'vi' ? 'Ngày sinh:': 'Date of Birth:'}</p>
                        <p className="text">{birthDay}</p>
                    </div>
                    <div className="contact__item phone-number">
                        <p className="title">{language === 'vi' ? 'Số điện thoại:': 'Phone number'}</p>
                        <p className="text">{phoneNumber}</p>
                    </div>
                    <div className="contact__item address">
                        <p className="title">{language === 'vi' ? 'Địa chỉ nơi ở:': 'Current address:'}</p>
                        <p className="text">{address}</p>
                    </div>
                </div>
                <div className="btn-box-toggle-theme" >
                    <div className="btn-theme-mode">
                        <div className="bg-light"></div>
                        <div className="bg-dark"></div>
                        <div className="switch" onClick={handleChangeMode}></div>
                    </div>
                    <div className="btn-change-language" onClick={handleChangeLanguage}></div>
                </div>
            </div>
            
        </header>
    )
}
export default memo(Header)