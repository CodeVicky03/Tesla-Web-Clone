import panal from "../Images/Mega-Menu-Energy-Solar-Panels.webp"
import roof from "../Images/Mega-Menu-Energy-Solar-Roof.webp"
import power from "../Images/Mega-Menu-Energy-Powerwall-US.webp"
import mega from "../Images/Mega-Menu-Energy-Megapack.webp"
import "./list.css"

function Energy() {
    return (
        <div className="list">
            <div className="list-left">
                <div className="list-main">
                    <img src={panal} alt=""></img>
                    <h3>Solar Panels</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={roof} alt=""></img>
                    <h3>Solar Roof</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={power} alt=""></img>
                    <h3>Powerwall</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <br></br>
                <div className="list-main">
                    <img src={mega} alt=""></img>
                    <h3>Megapack</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
            </div>
            <div className="list-right">
                <p>Schedule a Consultation</p>
                <p>Why Solar</p>
                <p>Incentives</p>
                <p>Support</p>
                <p>Partner with Tesla</p>
                <p>Commercial</p>
                <p>Utilities</p>
            </div>
        </div>
    )
}

export default Energy