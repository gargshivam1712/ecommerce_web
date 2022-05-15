import React, { Component } from 'react'
import Card  from "../components/Card";
import download from "../images/download.jpg";
import download1 from "../images/download1.jpg";
import download2 from "../images/download2.jpg";
import { getAllCategory } from "../apis/category_api"
import { getAllProduct } from "../apis/product_api"

export default class Home extends Component {

  state = {
    categorys : [],
    products : []
  }

  componentDidMount() {
    getAllCategory().then(res => this.setState({categorys : res}))
    getAllProduct().then(res => {this.setState({products : res}) 
    console.log(res)})
  }

  onAddCart = (e , id)=>{
    console.log(id,"qwertyuio")
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {
            this.state.products.length > 0 ? this.state.products.map((val , index)=> <div key={index} className='col-lg-3 col-sm-6'><Card  product_image_url = {download} product_details = {val} /></div>)
            : <div>
              <h3>Sorry! No Product Available</h3>
            </div>
          }
        </div>
      </div>
    )
  }
}
