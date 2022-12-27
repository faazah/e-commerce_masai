import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getProducts();
    }, [])
    console.log(products);

    const getProducts = async () => {
        let data = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
        let result = await data.json();
        setProducts(result.data);
    }

    const handleClick = (id) =>{
        navigate(`/product-detail/${id}`);
    }

    return (
        <div>
            <h1>Product Page</h1>
            <div className="product-list">
                {products.length>0 && products.map((item) => {
                    return (
                        <div key={item.id} onClick={() => handleClick(item.id)}>
                            <img src={item.image} alt="image" />
                            <p>Brand: {item.brand}</p>
                            <p>Title: {item.title}</p>
                            <p>Category: {item.category}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}