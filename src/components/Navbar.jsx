import { Link } from "react-router-dom"

export const Navbar = () =>{
    return (
        <div className="navbar">
            <Link to="/">Product</Link>
            <Link to="/product-detail/:id">Product Detail</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/order">Orders</Link>
        </div>
    )
}