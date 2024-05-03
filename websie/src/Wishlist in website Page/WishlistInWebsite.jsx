import React from 'react'
import './Wishlistin.css'
import Navbarpage from '../Homepage/Navbarpage/Navbarpage'

export default function WishlistPage() {
  return (
    <>
 
      <div className="wishlist-div-1">
  <div className="empty-cart-img">
    <img
      src="https://d3kinlcl20pxwz.cloudfront.net/images/wishlist-empty-state.png"
      alt=""
    />
    <h2 className="empty-cart-head">Your wishlist is empty</h2>
    <p className="empty-cart-text">
      Seems like you don't have wishes here. Make a wish!
    </p>
    <button className="empty-cart-button" type="submit">
      <a href="#">Start Shopping</a>
    </button>
  </div>
</div>

    </>
  )
}
