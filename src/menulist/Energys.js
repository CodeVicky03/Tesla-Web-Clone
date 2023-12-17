import "./menulist.css"
import panal from "../Images/Mega-Menu-Energy-Solar-Panels.webp"
import roof from "../Images/Mega-Menu-Energy-Solar-Roof.webp"
import power from "../Images/Mega-Menu-Energy-Powerwall-US.webp"
import mega from "../Images/Mega-Menu-Energy-Megapack.webp"
import { ImCross } from "react-icons/im";
import { FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"

function Energys(){

    var navigate = useNavigate()

    return(
        <div className="Energys-m">
            <div className="Energys-head">
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/menu")}><FaLessThan/></h1>
                <h1>Energy</h1>
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/")}><ImCross/></h1>
            </div>
        <div className="Energys">
            <div className="Energys-left">
                <div className="Energys-main">
                    <img src={panal} alt=""></img>
                    <h3>Solar Panels</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="Energys-main">
                    <img src={roof} alt=""></img>
                    <h3>Solar Roof</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="Energys-main">
                    <img src={power} alt=""></img>
                    <h3>Powerwall</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <br></br>
                <div className="Energys-main">
                    <img src={mega} alt=""></img>
                    <h3>Megapack</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
            </div>
            <hr></hr>
            <div className="Energys-right">
                <p>Schedule a Consultation</p>
                <p>Why Solar</p>
                <p>Incentives</p>
                <p>Support</p>
                <p>Partner with Tesla</p>
                <p>Commercial</p>
                <p>Utilities</p>
            </div>
        </div>
        </div>
    )
}

export default Energys