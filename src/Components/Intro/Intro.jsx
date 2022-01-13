import "./Intro.css"
import Me from "../../Img/meImg.png"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Edvinas Ramanauskas</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Junior Full-Stack developer</div>
                        <div className="i-title-item">Junior UI/UX Designer</div>
                        <div className="i-title-item">Junior Programmer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Racer</div>
                    

                    </div>
                </div>
                <p className="i-description">I am Junior programmer which is learning new conspects and programming languages for about a year</p>

            </div>
            
            </div>
            <div className="intro-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"></img>
            </div>

        </div>
    )
    
}

export default Intro;