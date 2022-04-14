import './aboutMe.scss'
import {memo} from 'react'
import iconWebDesign from '../../assets/icon/web design.png'
import iconResponsive from '../../assets/icon/ui-design.png'
import iconCode from '../../assets/icon/coding.png'
import iconAbout from '../../assets/iconTitle/about me.png'
function AboutMe({data, language}) {
    return (
        <div className="container__section about-me">
            <div className="text-box">
                <div className="title-box">
                    <img src={iconAbout} alt="about me icon.png" className="title-icon"/>
                    <h1 className="title">{language === 'vi' ? 'Tóm tắt bản thân' : 'About me'}</h1>
                </div>
                <div className="text-content">
                    {
                        data.text.map((text, i) => {
                            return <div className={`text text-${i+1}`} key={i}><p>{text}</p></div>
                        })
                    }
                </div>
            </div>
            <h4 className="title">{language === 'vi' ? 'Những gì đang làm ?' : 'What do I do ?'}</h4>
            <div className="box__i-do">
                <div className="box-item">
                    <img src={iconWebDesign} alt="web-design.png" />
                    <div className="box-content">
                        <p className="title">{language === 'vi' ? 'Thiết kế Website' : 'Web Design'}</p>
                        <p className="text">
                            {language === 'vi' 
                                ? 'Mang phong cách thiên hướng bauhuas, tối giản nhưng không kém phần bắt mắt' 
                                : 'Pursuing Bauhaus style, straightforward but aesthetic.'
                            } 
                        </p>
                    </div>
                </div>
                <div className="box-item">
                    <img src={iconCode} alt="web-design.png" />
                    <div className="box-content">
                        <p className="title">{language === 'vi' ? 'Lập trình Website' : 'Web Developer'}</p>
                        <p className="text">{language === 'vi' ? 'Lập trình, phát triển chất lượng trang web ở mức cao nhất' : 'Programming, advancing websites under high-quality standard'}</p>
                    </div>
                </div>
                <div className="box-item">
                <img src={iconResponsive} alt="web-design.png" />
                    <div className="box-content">
                        <p className="title">Responsive</p>
                        <p className="text">{language === 'vi' ? 'Tương thích mọi thiết bị khi truy cập website' : 'Browser compatibility assured for website entry.'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(AboutMe)