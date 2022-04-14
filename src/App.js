import Header from './components/Header/header'
import Body from './components/Body/body'
import bgError from './assets/Error-01.png'
import {useState} from 'react'
function App() {
  const useWidth = () => {
    const width = window.matchMedia('(min-width: 1200px)')
    const [widthScreen, setWidthScreen] = useState(width.matches)
    width.addEventListener('change', (e) => {
      console.log(e.matches);
      setWidthScreen(e.matches)
    })
    return {widthScreen}
  }
  const {widthScreen} = useWidth()
  return (
    <>
      { widthScreen ? (
          <div id="App" className="light">
            <Header />
            <Body />
          </div>
          )
        : <div className="error-404">
            <img src={bgError} alt="error.png" className="error"></img>
            <p className="text">Xin lỗi, tôi không muốn trình duyệt này hiển thị trên mobile, tablet</p>     
        </div>
      }
    </>
  );
}

export default App;
