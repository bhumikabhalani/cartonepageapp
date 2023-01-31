import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import CartProductList from './CartProductList';
import { useRef } from 'react';

function App() {

  const cartProducts = useRef(null);





  return (
    <div className="App">
        <div className="left">
          <h2>Shopping Cart</h2>
          <a href="#" onClick={() => {
            cartProducts.current.deleteItems();
          }} className="href-font">Delete all items</a>
          <hr></hr>
          <p>varun-gaba (name of the product) has been moved to Save for later.</p>
          <hr></hr>
          <CartProductList ref={cartProducts}></CartProductList>
        </div>

        <ProductList addToCart={(singleProduct)=>{
          cartProducts.current.addToCart(singleProduct)
        }}></ProductList>

      {/* <div className="right">
        <div className="product-right">
          <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
          <div className='product-right-main'>
            <div className="product-right-left-img">
              <img src="images/c-d-x-PDX_a_82obo-unsplash.jpg" style={{width:'100%'}} />
            </div>
            <div className="product-right-right-div">
              <p className='product-title'>The standard Lorem Ipsum passage, used since the 1500s</p>
              <div className='product-rating'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
              <div className='product-rating-count'>1023</div>
              <div className='product-rating-price'>$16.50</div>
              <div className='product-prime'>
                <img src='images/1200px-Amazon_Prime_Logo.svg.png'style={{width:'10%'}}></img>
              </div>
              <div className='product-add'>
                <button>Add to cart</button>
              </div>
            </div>
          </div>      
          
        </div>
      </div> */}
    </div>
  );
}

export default App;
