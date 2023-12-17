import "./menulist.css"
import { ImCross } from "react-icons/im";
import { FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
import charge from "../Images/Mega-Menu-Charging-Home-Charging.webp"
import wheel from "../Images/Mega-Menu-Shop-Vehicle-Accessories.webp"
import cap from "../Images/Mega-Menu-Shop-Apparel.webp"
import bag from "../Images/Mega-Menu-Shop-Lifestyle.jpeg"

function Shoping(){

    var navigate = useNavigate()

    return(
        <div className="shoping">
            <div className="Energys-head">
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/menu")}><FaLessThan/></h1>
                <h1>Shop</h1>
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/")}><ImCross/></h1>
            </div>

            <div className="shoping-item">
            <div className="shoping-img">
                <img src={charge} alt=""></img>
                <p>Charging</p>
            </div>
            <div className="shoping-img">
                <img src={wheel} alt=""></img>
                <p>Vehicle Accessories</p>
            </div>
            <div className="shoping-img">
                <img src={cap} alt=""></img>
                <p>Apparel</p>
            </div>
            <div className="shoping-img">
                <img src={bag} alt=""></img>
                <p>Lifestyle</p>
            </div>
        </div>
        </div>
    )
}

export default Shoping