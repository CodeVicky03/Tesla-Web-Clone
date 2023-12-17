import "./list.css"
import "../index.css"
import modelS from "../Images/Mega-Menu-Vehicles-Model-S.webp"
import model3 from "../Images/Mega-Menu-Vehicles-Model-3.webp"
import modelX from "../Images/Mega-Menu-Vehicles-Model-X.webp"
import modelY from "../Images/Mega-Menu-Vehicles-Model-Y.webp"
import cyber from "../Images/Mega-Menu-Vehicles-Cybertruck-1x.webp"
import help from "../Images/Mega-Menu-Vehicles-HMC-RedBlue.png"

function List() {

    return (
        <div className="list">
            <div className="list-left">
                <div className="list-main">
                    <img src={modelS} alt=""></img>
                    <h3>Model S</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={model3} alt=""></img>
                    <h3>Model 3</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={modelX} alt=""></img>
                    <h3>Model X</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
                <br></br>
                <div className="list-main">
                    <img src={modelY} alt=""></img>
                    <h3>Model Y</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={cyber} alt=""></img>
                    <h3>Cybertruck</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
                <div className="list-main">
                    <img src={help} alt=""></img>
                    <h3>Help Me Choose</h3>
                    <p>Learn<span style={{marginLeft:"10px"}}>Order</span></p>
                </div>
            </div>
            <div className="list-right">
                <p>Inventory</p>
                <p>Used Cars</p>
                <p>Demo Drive</p>
                <p>Trade-in</p>
                <p>Compare</p>
                <p>Fleet</p>
                <p>Semi</p>
                <p>Roadster</p>
            </div>
        </div>
    )
}

export default List