import "./menulist.css"
import charging from "../Images/Mega-Menu-Charging-Charging.webp"
import homecharge from "../Images/Mega-Menu-Charging-Home-Charging.webp"
import supercharge from "../Images/Mega-Menu-Charging-Supercharging-NA.webp"
import { ImCross } from "react-icons/im";
import { FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"

function Charging(){

    var navigate = useNavigate()

    return(
        <div className="charging-m">
             <div className="charging-head">
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/menu")}><FaLessThan/></h1>
                <h1>Charge</h1>
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/")}><ImCross/></h1>
            </div>
            <div className="charging" style={{ paddingTop: "40px", paddingBottom:"40px"}}>
            <div className="charging-left">
                <div className="charging-main">
                    <img src={charging} alt=""></img>
                    <h3>Charging</h3>
                    <p>Learn</p>
                </div>
                <div className="charging-main">
                    <img src={homecharge} alt=""></img>
                    <h3>Home Charging</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
                <div className="charging-main">
                    <img src={supercharge} alt=""></img>
                    <h3>Supercharging</h3>
                    <p>Learn<span style={{ marginLeft: "10px" }}>Order</span></p>
                </div>
            </div>
            <hr></hr>
            <div className="charging-right">
                <p>Charging Calculator</p>
                <p>Trip Planner</p>
                <p>Supercharger Voting</p>
                <p>Host a Supercharger</p>
                <p>Commercial Charging</p>
                <p>Host Wall Connectors</p>
            </div>
        </div>
        </div>
    )
}

export default Charging