import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDetail = () =>{
    const [productDescription, setProductDescription] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    // console.log(params);
    // console.log(productDescription);
    const {id, image, brand, title, category, price} = productDescription;

    useEffect(() =>{
        getProductById();
    },[])

    const getProductById = async () =>{
        let result = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${params.id}`);
        result = await result.json();
        setProductDescription(result.data);
    }

    const handleCart = () =>{
        let cartArray = [];
        const data = JSON.parse(localStorage.getItem('product'));
        if(data){
            cartArray = [...data];
        }
        const payload = [...cartArray, ...[productDescription]];
        localStorage.setItem('product', JSON.stringify(payload));
        navigate('/cart');
    }

    return (
        <div>
            <h1 style={{marginBottom: "30px"}}>Product Detail Page</h1>
                <div className="product-detail">
                    <img src={image} alt="image" />
                    <p>Brand: {brand}</p>
                    <p>Title: {title}</p>
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem pariatur obcaecati sit? Rem, deserunt dolores totam corrupti rerum, nesciunt hic ad quidem sed quo veritatis reiciendis. Exercitationem, consectetur a!</p>
                    <button onClick={() => handleCart()}>Add to Cart</button>
                </div>    
        </div>
    )
}