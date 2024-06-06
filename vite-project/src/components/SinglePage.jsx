import React from 'react'
import { useParams } from 'react-router-dom' 
import styes from "./Home.module.css"
const SinglePage = () => {
  const {productID}=useParams() ;
  console.log(productID)
  return (
    <div className={styes.SinglePageContainer} >
      <div><img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" /></div>
      <div>
<h2>Title</h2>
<h3>DEsc</h3>
<h3>price</h3>
<h4>discount</h4>
<h3>Rating</h3>
<h4>Caterogry</h4>
<h4>returnPolicy</h4>
<button>Add to card</button>
      </div>
    </div>
  )
}

export default SinglePage
