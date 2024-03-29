import React from 'react'

function Details() {
  return (
    <>
 <section className="py-5">
  <div className="container">
    <h2>Details</h2>
    <div className="wrapper row">
      <div className="preview col-md-6">
        <div className="preview-pic tab-content">
          <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
          <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
          <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
          <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
          <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
        </div>
      </div>
      <div className="details col-md-6">
        <h3 className="product-title">men's shoes fashion</h3>
        <div className="rating">
          <div className="stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <span className="review-no">41 reviews</span>
        </div>
        <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
        <h4 className="price">current price: <span>$180</span></h4>
        <div className="action">
          <button className="add-to-cart btn btn-default" type="button">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Details