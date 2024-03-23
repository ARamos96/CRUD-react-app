import { useState, useEffect, React } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import axios from "axios";


function App() {


  return (
    <div className="App">
    <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;


/* import { useState, useEffect, React } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import axios from "axios";

const productsAPI = "https://deploying-json-api.adaptable.app/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
    .get(productsAPI)
    .then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={products.map(product => <Products product={product} key={product.id} />)} />
      </Routes>
    </div>
  );
}
export default App; */