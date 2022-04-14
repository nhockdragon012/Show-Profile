import './loading.scss'
function Loading() {
    return (
        <div className="loading">
            <div className="loading-pacman">
                <div className="pacman"></div>
                <div className="pacman"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </div>
            <h4 className="title">Loading...</h4>
        </div>
        
    )
}
export default Loading