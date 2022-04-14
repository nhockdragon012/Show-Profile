import iconContact from '../../assets/iconTitle/contact.png'
import './form.scss'
import {useState, useEffect} from 'react'
import database from '../firebase'
import {ref, set, onValue} from 'firebase/database'
function Form({language}) {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [messenger, setMessenger] = useState('')
    const [id, setId] = useState()
    const [isSuccess, setIsSuccess] = useState()
    //Back-end
    useEffect(() => {
        const getIdFirebase = async () => {
            const dbRef = await ref(database, 'form/')
            onValue(dbRef, (snapshot) => {
                setId(Object.keys(snapshot.val()).length + 1)
            })
        }
        getIdFirebase()
    },[])
    
    const handleSubmit = (inputName, inputEmail, inputPhone, messenger, id) => {
        if(inputName && messenger  && (inputPhone|| inputEmail) ) {
            const dbRef = ref(database, 'form/contact' + id)
            set(dbRef, {
                id: id,
                name: inputName,
                email: inputEmail,
                phoneNumber: inputPhone,
                messenger: messenger
            })
            console.log('input: ', inputName, inputPhone, messenger);
            setInputName('')
            setInputEmail('')
            setInputPhone('')
            setMessenger('')
            setIsSuccess('success')
        }else {
            setIsSuccess('error')
        }
    }
    return (
        <div className="container__section contact">
            <div className="title-box">
                <img src={iconContact} alt="career goals.png" className="title-icon" />
                <h1 className="title">{language === 'vi' ? 'Liên hệ' : 'Contact with me'}</h1>
            </div>
            <div className="form-contact">
                <div className="input-item">
                    <label htmlFor="input--name">{language === 'vi' ? 'Tên:': 'Name:'}</label>
                    <input 
                        type="text" 
                        className="input" 
                        id="input--name"
                        value={inputName}
                        onChange={e => setInputName(e.target.value)}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="input--email">Email:</label>
                    <input
                        type="email" 
                        className="input" 
                        id="input--email"
                        value={inputEmail} 
                        onChange={e => setInputEmail(e.target.value)}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="input--phone">{language === 'vi' ? 'Số điện thoại:': 'Phone number:'}</label>
                    <input
                        type="tel" 
                        className="input" 
                        id="input--phone"
                        maxLength="11"
                        value={inputPhone} 
                        onChange={e => setInputPhone(e.target.value)}
                    />
                </div>
                <div className="input-item">
                    <label htmlFor="input--messenger">{language === 'vi' ? 'Tin nhắn:': 'Messenger:'}</label>
                    <textarea
                        row="6" 
                        className="input" 
                        id="input--messenger"
                        value={messenger}
                        onChange={e => setMessenger(e.target.value)}
                    />
                </div>
                <button className="btn-submit" onClick={() => handleSubmit(inputName, inputEmail, inputPhone, messenger, id)}>{language === 'vi' ? 'Gửi': 'Send'}</button>
                {
                isSuccess === 'success' && <div className="aler-form is-success">
                    <p className="alert" onClick={() => setIsSuccess('')}>{language === 'vi' ? 'Cảm ơn, mình sẽ liên hệ lại bạn ngay': 'Thank you, I will contact you soon'}</p>
                </div>
                }
                {
                isSuccess === 'error' && <div className="aler-form is-error">
                    <p className="alert" onClick={() => setIsSuccess('')}>{language === 'vi' ? 'Oops, vui lòng kiểm tra lại thông tin': 'Oops, Something is wrong, try enter your information'}</p>
                </div>
                }
            </div>
        </div>
    )
}
export default Form
