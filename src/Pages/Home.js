// import { MainContent } from "./MainContent";
export function Home() {
    return <>
        {/* <h1>Home Page</h1> */}
        <div className="main">
            <div className="intro">
                <div className="intro-container">
                    <h1 className='introh1'>Hey!</h1>
                    <p>I am a Full-stack developer with a passion for the front end and all things design related. Currently calling the Capital District of New York home. Throughout my time in the field I have been lucky enough to work with a wide variety of different technologies, and am constantly on the lookout for new things to learn. Outside of work I enjoy Cooking, Hiking, Camping, Snowboarding, Taekwondo, trying new restaurants, reading, and trying to get better at gardening - slowly but surely. Check out some of my work below and hit the contact button if you are interested in starting a project together!</p>
                </div>
            </div>
            <div className="work">
                <div className="work-container">
                    <div className="work-item">
                        <h2>Center For Disability Services</h2>
                    </div>
                    <div className="work-item">
                        <h2>Personal Paws</h2>
                        {/* <img src={abstract2} alt="" /> */}
                    </div>
                    <div className="work-item">
                        <h2>NEPA Credit Union</h2>
                        {/* <img src={abstract3} alt="" /> */}
                    </div>
                    <div className="work-item">
                        <h2>New York Credit Union Association</h2>
                        {/* <img src={abstract4} alt="" /> */}
                    </div>
                    <div className="work-item">
                        <h2>Cooperstown Allstar Village Store</h2>
                        {/* <img src={abstract5} alt="" /> */}
                    </div>
                    <div className="work-item">
                        <h2>Excelsior Wood Shop</h2>
                        {/* <img src={abstract6} alt="" /> */}
                    </div>
                    <div className="work-item">
                        {/* <img src={abstract7} alt="" /> */}
                    </div>
                    <div className="work-item">
                        {/* <img src={abstract8} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <MainContent /> */}
        {/* <Cta />
        <Footer /> */}
    </>
}