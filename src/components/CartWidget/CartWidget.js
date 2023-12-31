import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";


const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)
    
    
    
    
    return (
        <Link to="/cart" className="globoDeWidget">
            <RiShoppingCart2Line className="widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;