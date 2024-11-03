import { useEffect, useState } from "react"
import axios from 'axios';
import { useAuth } from "../auth/Authenticate";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Cart(){
    const [ cart , setCart] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() =>{
        if(!user){
            navigate('/login');
            return;
        }
        axios.get(`https://dummyjson.com/carts/user/${user.id}`)
        .then((res) =>{
            console.log(res.data);
            setCart(res.data);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    function placeOrder(){
        toast.success('Order Placed');
    }

    function calculateTotal(){
        let total = 0;
        cart.carts.forEach((c) =>{
            total = total + c.total;
        })
        return total;
    }
    return(
        <>
        <ToastContainer/>
        { cart ? <> <h1>cart Items</h1>  
        {/* diaplay cart items */}
        <h2> {calculateTotal()}</h2>
        <button className="btn btn-primary" onClick={() =>{ placeOrder()}}>Place order</button>
        </> : <h1>Lodaing............</h1>}
        </>
    )
}