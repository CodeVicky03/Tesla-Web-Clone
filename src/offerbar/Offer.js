import "./offer.css"

function Offer(props) {
    return (
        <div className="offer-bar">
            <h1 className="offer-bar-h1">$7,500 Federal Tax Credit for Certain Tesla Models
                <span className="offer-bar-span" style={{ fontSize: "14px", fontWeight: "550", paddingLeft: "20px", letterSpacing: "0.4px" }}>Reductions likely for certain vehicles in 2024. Take delivery by 12/31 for full $7,500.</span>
                <span className="offer-bar-spantwo" style={{ fontSize: "14px", fontWeight: "550", paddingLeft: "20px", letterSpacing: "1px", cursor: "pointer" }}><u>See Details</u></span>
            </h1>
        </div>
    )
}

export default Offer