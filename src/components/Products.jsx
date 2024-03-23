import { useState, useEffect, React } from "react";
import axios from "axios";

const productsAPI = "https://deploying-json-api.adaptable.app/products";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(productsAPI).then((response) => {
      setProducts(response.data);
    });
  }, []);
  

  return (
      products.map((product) => (
        <div className="product-container" key={product.id}>
        {console.log(product.id)}
          <h5>{product.description}</h5>
          <p>{product.price}</p>
        </div>
      ))

  );
}

export default Product;

/* import { useState, useEffect, React } from "react";
import axios from "axios";

function Product({ product }) {


  return (
    <div className="product-container" >
      <h5>{product.description}</h5>
      <p>{product.price}</p>
    </div>
  );
}

export default Product;
 */