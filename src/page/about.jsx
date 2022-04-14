import {useState, useEffect} from 'react'
import './about.scss'
function About() {
    useEffect(() => {
        const getData = async () => {
            const data = await getProfile(toggle.language)
            setData(data)
        }
        getData()
    },[toggle.language])
    return (
        <></>
    )
}
export default About