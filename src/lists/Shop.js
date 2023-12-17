import charge from "../Images/Mega-Menu-Charging-Home-Charging.webp"
import wheel from "../Images/Mega-Menu-Shop-Vehicle-Accessories.webp"
import cap from "../Images/Mega-Menu-Shop-Apparel.webp"
import bag from "../Images/Mega-Menu-Shop-Lifestyle.jpeg"

function Shop() {
    return (
        <div className="shop-item">
            <div className="shop-img">
                <img src={charge} alt=""></img>
                <p>Charging</p>
            </div>
            <div className="shop-img">
                <img src={wheel} alt=""></img>
                <p>Vehicle Accessories</p>
            </div>
            <div className="shop-img">
                <img src={cap} alt=""></img>
                <p>Apparel</p>
            </div>
            <div className="shop-img">
                <img src={bag} alt=""></img>
                <p>Lifestyle</p>
            </div>
        </div>
    )
}

export default Shop