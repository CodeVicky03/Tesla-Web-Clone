import { ImCross } from "react-icons/im";
import { FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
import "./menulist.css"

function Discovering(){

    var navigate = useNavigate()

    return(
        <div className="discovering-m">
            <div className="Energys-head">
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/menu")}><FaLessThan/></h1>
                <h1>Discover</h1>
                <h1 style={{cursor:"pointer"}} onClick={()=> navigate("/")}><ImCross/></h1>
            </div>

            <div className="discovering-h">
            <div className="discovering">
                <span style={{ color: "#5c5e62" }}>Resources</span>
                <p>Demo Drive</p>
                <p>Insurance</p>
                <p>Video Guides</p>
                <p>Customer Stories</p>
                <p>Events</p>
            </div>
            <hr></hr>
            <div className="discovering">
                <span style={{ color: "#5c5e62" }}>Location Services</span>
                <p>Find Us</p>
                <p>Trip Planner</p>
                <p>Find a Collision Center</p>
                <p>Find a Certified Installer</p>
            </div>
            <hr></hr>
            <div className="discovering">
                <span style={{ color: "#5c5e62" }}>Company</span>
                <p>About</p>
                <p>Careers</p>
                <p>Investor Relations</p>
            </div>
        </div>
        </div>
    )
}

export default Discovering