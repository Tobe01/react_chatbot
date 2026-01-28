import { Products } from './products';

export function HomePageGrid({products, getAppData}){
  return(
    <div className="products-grid">
        {products.map((product)=>{
          return(
            <>
              <Products key={product.id} product={product} getAppData={getAppData} />
            </>
          )
          })
        }
    </div>
  )
}