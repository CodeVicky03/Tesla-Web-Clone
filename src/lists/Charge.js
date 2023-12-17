import charging from "../Images/Mega-Menu-Charging-Charging.webp"
import homecharge from "../Images/Mega-Menu-Charging-Home-Charging.webp"
import supercharge from "../Images/Mega-Menu-Charging-Supercharging-NA.webp"

function Charge() {
    return (
        <div className="list" style={{ paddingTop: "120px", paddingBottom:"40px"}}>
            <div className="list-left">
                <div className="list-main">
                    <img src={charging} alt=""></img>
                    <h3>Charging</h3>
                    <p>Learn</p>
                </div>
                <div className="list-main">
                    <img src={homecharge} alt=""></img>
                    <h3>Home Charging</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={supercharge} alt=""></img>
                    <h3>Supercharging</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
            </div>
            <div className="list-right-main">
                <p>Charging Calculator</p>
                <p>Trip Planner</p>
                <p>Supercharger Voting</p>
                <p>Host a Supercharger</p>
                <p>Commercial Charging</p>
                <p>Host Wall Connectors</p>
            </div>
        </div>
    )
}

export default Charge