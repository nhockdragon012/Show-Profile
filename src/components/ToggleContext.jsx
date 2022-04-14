import {useState, createContext} from 'react'
export const IsToggle = createContext()
function ToggleContext({children}) {
    const [language, setLanguage] = useState('vi')
    const [toggleTheme, setToggleTheme] = useState('light')
    const data = {
        language, 
        setLanguage,
        toggleTheme, 
        setToggleTheme
    }
    if(toggleTheme === 'dark') {
        document.querySelector('body').classList.add('dark')
    }else if(toggleTheme === 'light' && document.querySelector('body').classList.contains('dark')) {
        document.querySelector('body').classList.remove('dark')
    }

    return (
        <IsToggle.Provider value={data}>
            {children}
        </IsToggle.Provider>
    )
}
export default ToggleContext