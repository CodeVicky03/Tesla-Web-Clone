import "./singnin.css"
import logo from "../Images/teslalogo.svg"
import { GrLanguage } from "react-icons/gr";

function Signin() {
    return (
        <div className="sign">
            <div className="sign-head">
                <img className="img1" src={logo} alt=""></img>
               <div className="img2"><GrLanguage/></div>
            </div>

            <div className="sign-in">
                <div className="sign-inn">
                    <h1>Sign in</h1>
                    <span>email</span>
                    <input type="email" />
                    <button>Next</button>
                    <p>Trubble signing in ?</p>
                    <div className="hr">
                    <hr></hr>or<hr></hr>
                    </div>
                    <button style={{backgroundColor:"#393c4134", color:"rgba(0, 0, 0, 0.658)"}}>Create Account</button>
                </div>
            </div>
            <div className="sign-footer">
                <p>Tesla @ 2023</p>
                <p>Privacy and Legal</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Signin