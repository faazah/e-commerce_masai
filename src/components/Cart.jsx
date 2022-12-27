import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () =>{
    const [cart,setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        const data= JSON.parse(localStorage.getItem('product')) || [];
        setCart(data);
    },[])

    // console.log(cart);
    const handleOrder = () =>{
        navigate('/order')
    }

    return(
        <div>
            <h1>Cart Page</h1>
            <div className="product-list">
                {cart.length>0 && cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.image} alt="image" />
                            <p>Brand: {item.brand}</p>
                            <p>Title: {item.title}</p>
                            <p>Category: {item.category}</p>
                            <p>Price: {item.price}</p>
                            <button className="btn" onClick={handleOrder}>Place Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}