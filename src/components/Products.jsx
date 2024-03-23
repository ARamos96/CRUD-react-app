import { useState, useEffect, React } from "react";
import axios from "axios";

const productsAPI = "https://deploying-json-api.adaptable.app/products";

function Product() {
  const [products, setProducts] = useState([]);
  const [productsFromAPI, setProductsFromAPI] = useState([]);
  const [ inStockProducts, setInStockProducts ] = useState(false);
  //const [ inStockProducts, setInStockProducts ] = useState([false]);

  useEffect(() => {
    axios
    .get(productsAPI)
    .then((response) => {
      setProducts(response.data);
      setProductsFromAPI(response.data);
    });
  }, []);

  useEffect(() => {
    inStockFilter();
  }, [inStockProducts]);

  const inStockFilter = () => {
/*     const inStock = productsFromAPI.filter((product) => {
      return product.inStock
    });
    setProducts(inStock); */

    //if the product is in stock, we filter the array and set Products to the filtered array.
    if (inStockProducts) {
      const inStock = productsFromAPI.filter((product) => {
        return product.inStock;
      });
      setProducts(inStock);
    } //if the product is not in stock, we filter the array and set Products to the origina 
    //unfiltered array
    else {
      setProducts(productsFromAPI);
    }
  }

  const handleCheckboxChange = () => {
    setInStockProducts(!inStockProducts);
  }

  return (
    <div className="products-list">
      <ul>
      {/* <input type="checkbox" onClick={inStockFilter}/> */}
      {/* <span>Show Available<input type="checkbox"  onClick={handleCheckboxChange}/></span> */}
      <label>Show Available</label>
      <input type="checkbox"  onClick={handleCheckboxChange}/>
        {products.map((product) => (
          <li className="product-container" key={product.id}>
            {console.log(product.id)}
            <h5>{product.description}</h5>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
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
