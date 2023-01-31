import { Component } from "react";




export default class CartProductList extends Component{
  
  
  constructor(props){
    super(props);

    let idata = JSON.parse(localStorage.IDATA || '{}');

    this.state = {


      cartValues: {
        ...(idata.cartValues || {})
      },

      cartProductList: [
        ...(idata.cartProductList || [])
      ]
    }
  }

  setState(objectInput) {
    super.setState(objectInput, () => {

      localStorage.IDATA = JSON.stringify(this.state)
    });
  }


  addToCart(singleProduct){


    var hasId = this.state.cartProductList.some((singleProductEach) => {
      return singleProductEach.id == singleProduct.id
    });

    if(hasId) {
      alert("product already exist") 
      return false;
    }

    singleProduct = {
      ...singleProduct,
      total: singleProduct.price
    }


    this.setState({
      cartProductList: [
        ...this.state.cartProductList,
        singleProduct
      ],
      cartValues: []
    })

    this.setCartValues(singleProduct, 1);

  }

  setCartValues(singleProduct, quantity) {
    this.setState({
      cartValues: {
        ...this.state.cartValues,
        [singleProduct.id]: {
          ...(this.state.cartValues[singleProduct.id] || {}),
          total: +singleProduct.price * +quantity,
          quantity: +quantity
        }
      }
    })
  }

  deleteItems() {
    this.setState({
      cartValues: {

      },

      cartProductList: []

    })
  }

  render(){
    
    return <>

        <div className="cart-list-container">
          {
            this.state.cartProductList.map((singleProduct)=>{
              return <>              
                  <div className="product-main">
                    <div className='product-left-main'>
                      <div className="product-checkbox">
                        <input type="checkbox" onChange={(event) => {
                          // console.log()

                        }} />
                      </div>
                      <div className="product-cart-left-img">
                        <img src={singleProduct.image} style={{ width: '100%' }} />
                      </div>
                      <div className="product-cart-center-div">
                        <p className='product-title'>{singleProduct.title}</p>
                        <div className='stockStatus'>In stock</div>
                        <div className='soldBy'>Sold by Amazon.ca</div>
                        <div className='product-prime'>
                          <img src='images/1200px-Amazon_Prime_Logo.svg.png' style={{ width: '10%' }}></img>
                        </div>
                        <label>
                          <input className='giftcheckBox' type="checkbox" />
                          This will be a gift.<a href=''> Learn more</a>
                        </label>
                        <div className='productQty' >
                          <select 
                            value={this.state.cartValues 
                              && this.state.cartValues[singleProduct.id]
                              && this.state.cartValues[singleProduct.id].quantity
                              || 1}
                            onChange={(event) => {
                            let value = event.target.value;

                            this.setCartValues(singleProduct, value)
                          }}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="product-cart-right">
                      <b>${this.state.cartValues && this.state.cartValues[singleProduct.id] && this.state.cartValues[singleProduct.id].total || singleProduct.price}</b>
                    </div>
                  </div>

              </>
            })
          }


          {
            this.state.cartProductList && this.state.cartProductList.length && <div className="total-div" >
              Subtotal ({this.state.cartProductList.length} items) ${
                Object.values(this.state.cartValues).reduce((fSum, item)   => {
                  return fSum + item.total;
                }, 0)
              }
            </div> || ''
          }
        </div>
    </>
  }

}