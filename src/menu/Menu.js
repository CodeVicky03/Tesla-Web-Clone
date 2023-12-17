import "./menu.css"
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Menu() {

    var navigate = useNavigate()

    return (
        <div className="menu">
            <div className="close" onClick={() => navigate("/")} style={{cursor:"pointer"}}><ImCross /></div>
            <div className="menu-list">
                <ul>
                    <li onClick={()=> navigate("/vechicles")}>Vehicles</li>
                    <li onClick={()=> navigate("/energy")}>Energy</li>
                    <li onClick={()=> navigate("/charging")}>Charging</li>
                    <li onClick={()=> navigate("/discovering")}>Discover</li>
                    <li onClick={()=> navigate("/shoping")}>Shop</li>
                    <li>Support</li>
                    <div className="account" onClick={()=> navigate("/sign")}>
                        <span><CgProfile style={{fontSize:"25px", color:"rgba(0, 0, 0, 0.822)", textAlign:"center", marginRight:"10px"}}/></span>
                        <span>Account</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Menu