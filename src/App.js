import logo from "./Images/teslalogo.svg"
import { LuHelpCircle } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import List from './lists/List';
import Offer from './offerbar/Offer';
import Energy from "./lists/Energy";
import Charge from "./lists/Charge";
import Discover from "./lists/Discover";
import Shop from "./lists/Shop";
import Slide from './slider/Slide';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  function Sign() {
    navigate("/sign")
  }

  function moved() {
    var list = document.querySelector(".move-down");
    list.style.marginTop = "-62px"

    var one = document.querySelector(".one")
    one.style.display = "block"

    var two = document.querySelector(".two")
    two.style.display = "none"

    var three = document.querySelector(".three")
    three.style.display = "none"

    var four = document.querySelector(".four")
    four.style.display = "none"

    var five = document.querySelector(".five")
    five.style.display = "none"
  }
  function changevalue() {
    var list = document.querySelector(".move-down");
    list.style.marginTop = "-660px"
  }

  function movedone() {
    var one = document.querySelector(".one")
    one.style.display = "none"

    var two = document.querySelector(".two")
    two.style.display = "block"

    var three = document.querySelector(".three")
    three.style.display = "none"

    var four = document.querySelector(".four")
    four.style.display = "none"

    var five = document.querySelector(".five")
    five.style.display = "none"
  }

  function movedtwo() {
    var one = document.querySelector(".one")
    one.style.display = "none"

    var two = document.querySelector(".two")
    two.style.display = "none"

    var three = document.querySelector(".three")
    three.style.display = "block"

    var four = document.querySelector(".four")
    four.style.display = "none"

    var five = document.querySelector(".five")
    five.style.display = "none"
  }

  function movedthree() {
    var one = document.querySelector(".one")
    one.style.display = "none"

    var two = document.querySelector(".two")
    two.style.display = "none"

    var three = document.querySelector(".three")
    three.style.display = "none"

    var four = document.querySelector(".four")
    four.style.display = "block"

    var five = document.querySelector(".five")
    five.style.display = "none"
  }

  function movedfour() {
    var one = document.querySelector(".one")
    one.style.display = "none"

    var two = document.querySelector(".two")
    two.style.display = "none"

    var three = document.querySelector(".three")
    three.style.display = "none"

    var four = document.querySelector(".four")
    four.style.display = "none"

    var five = document.querySelector(".five")
    five.style.display = "block"
  }

  return (
    <div>
      <div className="off"><Offer /></div>
      <div className="nav">
        <img src={logo} alt="" className="logo"></img>
        <ul>
          <li onMouseEnter={() => moved()}>Vehicles</li>
          <li onMouseEnter={() => movedone()}>Energy</li>
          <li onMouseEnter={() => movedtwo()}>Charging</li>
          <li onMouseEnter={() => movedthree()}>Discover</li>
          <li onMouseEnter={() => movedfour()}>Shop</li>
        </ul>

        <div className="images">
          <div className="img"><LuHelpCircle/></div>
          <div className="img"><GrLanguage/></div>
          <div className="img" onClick={() => Sign()}><CgProfile/></div>
        </div>

        <div className="toggle">
          <li onClick={()=> navigate("/menu")}>Menu</li>
        </div>
      </div>

      <div className="move-down" style={{ transition: "2s ease" }} onMouseLeave={() => changevalue()}>
        <div className="one"><List /></div>
        <div className="two" style={{ display: "none" }}><Energy /></div>
        <div className="three" style={{ display: "none" }}><Charge /></div>
        <div className="four" style={{ display: "none" }}><Discover /></div>
        <div className="five" style={{ display: "none" }}><Shop /></div>
      </div>
      <div>
        <Slide />
      </div>
    </div>
  )
}

export default App;
