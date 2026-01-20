// product Details component
function ProductDetails({ name, price, discount, image }){
  return (
    <>
      <div>
        <img src={image} width="100" />
      </div>

      <div>
        { name }
      </div>

      {  discount === "Discount price: $5.45" ? <del>{ price }</del> : <div>{price}</div>}

      <div>
        { discount }
      </div>
    </>
  )
}

export default ProductDetails;