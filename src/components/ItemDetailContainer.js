import React, {useState, useEffect} from 'react';
import { getProductsById } from '../products/products';
import { ItemDetail } from './ItemDetail';
import { ItemCount } from "./ItemCount";
import { Wait } from './ui/Wait';


export const ItemDetailContainer = () => {

 const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos al carrito`);
  };

    const [productId, setProducId] = useState();

    useEffect(() => {
        getProductsById(2)
          .then((product) => {
            setProducId(product);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
      <>
  {productId ? <div className="cardDetail">
      <div className="cardDetail__container">
      <ItemDetail productId={productId}/>

       <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
      </div>

    </div> : <Wait/>}
       
      </>
    )

    
}
