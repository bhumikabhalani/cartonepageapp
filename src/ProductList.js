import { Component } from "react";




export default class ProductList extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          title:"The standard Lorem Ipsum passage, used since the 1500s",
          image:"images/c-d-x-PDX_a_82obo-unsplash.jpg",
          description:"The standard Lorem Ipsum passage, used since the 1500s",
          ratingCount:1023,
          price:16.50
        },
        {
          id: 2,
          title:"The standard Lorem Ipsum passage, used since the 1500s",
          image:"images/revolt-164_6wVEHfI-unsplash.jpg",
          description:"The standard Lorem Ipsum passage, used since the 1500s",
          ratingCount:1023,
          price:17.50
        },
        {
          id: 3,
          title:"The standard Lorem Ipsum passage, used since the 1500s",
          image:"images/daniel-korpai-wW7XbWYoqK8-unsplash.jpg",
          description:"The standard Lorem Ipsum passage, used since the 1500s",
          ratingCount:1023,
          price:18.50
        },
        {
          id: 4,
          title:"The standard Lorem Ipsum passage, used since the 1500s",
          image:"images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
          description:"The standard Lorem Ipsum passage, used since the 1500s",
          ratingCount:1023,
          price:19.50
        }
      ]
    }
  }

  render(){
    
    return <>
    
    <div className="right">

        {
          this.state.productList.map((singleProduct)=>{
            return <>
              <div className="product-right">
                <h2>{singleProduct.title}</h2>
                <div className='product-right-main'>
                  <div className="product-right-left-img">
                    <img src={singleProduct.image} style={{ width: '100%' }} />
                  </div>
                  <div className="product-right-right-div">
                    <p className='product-title'>{singleProduct.description}</p>
                    <div className='product-rating'>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <div className='product-rating-count'>{singleProduct.ratingCount}</div>
                    <div className='product-rating-price'>${singleProduct.price}</div>
                    <div className='product-prime'>
                      <img src='images/1200px-Amazon_Prime_Logo.svg.png' style={{ width: '10%' }}></img>
                    </div>
                    <div className='product-add'>
                      <button onClick={()=>{
                        this.props.addToCart(singleProduct)
                      }}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          })
        }

        
      </div>

    </>
  }

}