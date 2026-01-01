import List from './list';

function ArrayItems({arrayItems}){
  return(
    <>
      {arrayItems.map((arrayItem)=>{
          return(
              <List 
                message={arrayItem.message}
                key={arrayItem.id}
              />
          )
        })}
    </>
  )

};

export default ArrayItems;