import { useState , useEffect } from "react"
import { Link } from 'react-router-dom';
import './Products.css';
import axios from 'axios';



export function Products(){
    const [products ,setProduct] = useState([]);
    useEffect(() =>{
        axios.get('https://dummyjson.com/products')
    .then(res  => setProduct(res.data.products));
    },[]);

    return (
        <>
            <h1 className="products-title">Explore Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`} className="product-link">
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                            <h2 className="product-name">{product.title}</h2>
                        </Link>
                        <p className="product-price">Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        
      </>
    )
}



//<pre>{JSON.stringify(product, null, 2)}</pre>
//<h1>{JSON.stringify(products[0])}</h1>
