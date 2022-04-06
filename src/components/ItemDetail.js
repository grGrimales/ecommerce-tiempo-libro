import React from 'react'

export const ItemDetail = ({productId}) => {

 const { name, img, description, price, id } = productId;
    return (
        < >
        <img className="cardDetail__img" src={img} alt={name} />
           
                 <h2 className="cardDetail__title ">{name}</h2>
                  <p className="cardDetail__price">
                    Precio: <span>{price}</span>
                  </p>
                  <p className="cardDetail__description">
                  <span>Descripción:</span>   {description}
                  </p>
      
      </>
    )
}
