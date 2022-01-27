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
                <p className="a-desc">
                    Hey once again i'm brand new Junior Full-Stack developer
                    My wonders switched 180 degrees after my final exams I got called to volunteer in the Lithuania military and after that
                    my plans changed. After volunteering in the military I decided to try to find myself so I took GAP years after those years
                    I decided to join the programmers' crew very spontaneous, one day my mother told me that she applied for studies in one of the programming institutes
                    and that news hit me hard as the wall, so I told to myself I had to try it once again and I LOVED IT I found myself in this profession after years of trying a lot of other professions.
                    More about me I love to race with cartings, take photos of everything read books and travel.
                    Here are some projects which may interest you.
                    <br></br>
                    <li> Book-app(static): <a href="https://books-sorting-app.herokuapp.com/">Library</a> </li>
                    <li> Domino-clicker: <a href="https://domino-clicker.herokuapp.com/">Domino</a></li>
                    <li> Restaurant-design(half-responsive): <a href="https://amazing-restaurant-page.herokuapp.com/restaurant.html">Casa de la pasta</a></li>
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