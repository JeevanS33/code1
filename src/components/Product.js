
import { useNavigate, useParams } from 'react-router-dom';
import { useState ,useEffect } from "react";
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Product(){
    const { user } = useAuth();
    const { id } = useParams();
    const [product ,setProduct] = useState();
    const [quantity , setQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() =>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res  => setProduct(res.data))});

    function addToCart(){
        console.log(user);
        if(!user){
            navigate('/login')
        }
        if(quantity === 0){
            toast.error('Quantity is zero')
            return 
        }
        const body = {
            userId : user.id,
            products : [
                {
                    id : product.id,
                    quantity : quantity
                }
            ]
        }
        console.log(body);
        axios.post('https://dummyjson.com/carts/add', body)
        .then((res) => {
            console.log(res);
            toast.success('Product added to cart');
        }).catch((err) => {
            console.log(err);
            toast.error('Unable to add to cart');
        })
    }
    
    return(
        <>
        <ToastContainer/>
        <div className="product-page">
        {
         product ? (
            <div className="product-detail">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
            </div>
            <div> 
                <button onClick={() =>{ setQuantity(quantity +1)}}>+</button>{quantity}<button onClick={()=>{ setQuantity(quantity-1)}}>-</button>
                <button className='btn btn-primary' onClick={() =>{ addToCart()}}>Add to Cart</button>
            </div>
        </div>
         ) : (
            <h1>Loading.....</h1>
         )
        }
        </div>
        </>
    );
}