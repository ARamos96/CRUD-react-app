# React + Vite

# CRUD React App

## React App Tasks

1. **Install necessary packages**: Ensure that axios, react and react-router-dom are installed in your project.
2. **Create Routes for your App**: Make sure all pages for getting, creating, etc. are created.
3. **Create a Product.jsx Component**: This component should receive props and display product information.
4. **Fetch the products**: Use axios in a useEffect hook to fetch the products from the provided URL. Save the fetched products into a state variable using the useState hook.
5. **Display products**: Map over the fetched products and display them using the Products component.
    
    ```jsx
    products.map(product => <Product product={product} key={product.id} />)
    ```
    
6. **Filter products in stock**: Add a checkbox to filter the displayed products based on their `inStock` property (ie. A checkbox with a label `Show only inStock products`).
7. **Get a product by id**: Implement Links that redirect to `ProductDetailsPage.jsx` that take an id as a URL param and displays the product with the matching id.
8. **Create a product**: Implement a function that takes product data as an argument, and adds a new product to the list.
9. **Change a product**: In the Product Details Page, create an Edit Page Button that redirects to `EditProductPage.jsx` that features a pre-filled form where you can change the product and Save Changes.