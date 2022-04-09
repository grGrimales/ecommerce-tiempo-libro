import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../products/products';
import { ItemDetail } from './ItemDetail';
import { ItemCount } from "./ItemCount";
import { Wait } from './ui/Wait';


export const ItemDetailContainer = () => {

 const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos al carrito`);
  };

    const [productId, setProducId] = useState();


    const { id } = useParams()
    useEffect(() => {
        getProductsById(id)
          .then((product) => {
            setProducId(product);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

    return (
      <>
  {productId ? 
    <div className="cardDetail">
  
         <ItemDetail productId={productId}/>
         <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
    </div> : <Wait/>}
       
      </>
    )

    
}
