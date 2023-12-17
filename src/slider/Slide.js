import "./slide.css"
import modelS from "../Images/Homepage-Model-S-Desktop-LHD-6.22.webp"
import model3 from "../Images/Homepage-Model-3-Desktop-NA.jpg"
import modelX from "../Images/Homepage-Model-X-Desktop-LHD.webp"
import cyber from "../Images/Homepage-Cybertruck-Desktop.webp"
import panal from "../Images/425_HP_SolarPanels_D.webp"
import roof from "../Images/Homepage-SolarRoof-Desktop-Global.webp"
import power from "../Images/Homepage-Powerwall-Desktop.webp"
import access from "../Images/Homepage-Accessories-Desktop-NA-APAC.webp"

function Slide() {
    return (
        <div className="slide-main">
            <div className="slide-one" style={{ backgroundImage: `url(${model3})` }}>
                <div className="model3">
                    <div className="top">
                        <h1>Model 3</h1>
                        <h2>Lease starting at $329/mo*</h2>
                    </div>
                    <div className="bottom">
                        <button>Explore Inventory</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.589)", color: "white" }}>Demo Drive</button>
                        <p>*Excludes taxes and fees with price subject to change. Available in select states.<span style={{ cursor: "pointer", marginLeft: "10px" }}><u>See Details</u></span></p>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${modelX})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Model X</h1>
                        <h2 style={{ color: "black" }}>From $68,590*</h2>
                        <p style={{ color: "black" }}>After Federal Tax Credit & Est. Gas Savings</p>
                    </div>
                    <div className="bottom">
                        <button>Explore Inventory</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.589)", color: "white" }}>Demo Drive</button>
                        <p>*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.<br></br>
                            <span style={{ cursor: "pointer", marginLeft: "10px" }}><u>Learn about est. gas savings.</u></span></p>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${modelS})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Model S</h1>
                        <h2 style={{ color: "black" }}>From $71,090*</h2>
                        <p style={{ color: "black" }}>After Est. Gas Savings</p>
                    </div>
                    <div className="bottom">
                        <button>Explore Inventory</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.589)", color: "white" }}>Demo Drive</button>
                        <p>*Price before savings is $74,990, excluding taxes and fees. Subject to change.<br></br>
                            <span style={{ cursor: "pointer", marginLeft: "10px" }}><u>Learn about est. gas savings.</u></span></p>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${cyber})` }}>
                <div className="cyber">
                    <div className="bottom">
                        <button>Order Now</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.786)", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${panal})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Solar Panels</h1>
                        <p style={{ color: "black", fontSize: "14px" }}><u>Schedule a Virtual Consultation</u></p>
                    </div>
                    <div className="panal">
                        <button>Order Now</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.789)", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${roof})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Solar Roof</h1>
                        <p style={{ color: "black", fontSize: "14px" }}>Produce Clean Energy From Your Roof</p>
                    </div>
                    <div className="panal">
                        <button>Order Now</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.789)", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{ backgroundImage: `url(${power})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Powerwall</h1>
                    </div>
                    <div className="panal">
                        <button>Order Now</button>
                        <button style={{ backgroundColor: "rgba(0, 0, 0, 0.789)", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="slide-one" style={{backgroundImage: `url(${access})` }}>
                <div className="model3">
                    <div className="top">
                        <h1 style={{ color: "black" }}>Accessories</h1>
                    </div>
                    <div className="access">
                        <button>Shop Now</button>
                        <ul>
                            <li>Tesla © 2023</li>
                            <li>Privacy & Legal</li>
                            <li>Vehicle Recalls</li>
                            <li>Contact</li>
                            <li>News</li>
                            <li>Get Updates</li>
                            <li>Locations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide
