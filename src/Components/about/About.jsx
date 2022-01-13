import "./about.css"
import Award from "../../Img/award.png"

const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/5640515/pexels-photo-5640515.jpeg?auto=compress&cs=tinysrgb&h=450&w=500"
                        alt="" className="a-img"
                    />
                </div>

            </div>


            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Hey once again i'm brand new Junior Full-Stack developer
                </p>
                <p className="a-desc">
                    In school times I was very addicted to programming and was wondering one day become my own programming company CEO, but one day
                    my wonders switched 180 degrees when after my final exams I got called for a volunteering in Lithuania millitary and after that
                    my plans changed. After voluntering in millitary I decided to try find myself so I took GAP years

                    I decided to join programmers crew very spontanious, one day my mother told me that she applied for studyes in one of programming institutes
                    and that new hit me hard as wall.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Private Racing championship Awards 2019</h4>
                        <p className="a-award-desc">
                            One fact about my most loved hobby I became three times first place winner in 2019 private cartings championship
                        </p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default About;