import React, { FC, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardS } from './ProductCardS';
import { IProduct } from '../../interface/products';

interface Props {
  products: IProduct[];
  widthItem?: string; // en REM
}

export const ProductList: FC<Props> = ({ products, widthItem }) => {
    return (
      <div className='relative mt-2 ov-hidd' style={{ minHeight: "38rem" }}>
          <div className='pos-initial flex c-gap-2' id='carrusel'>
              {
                  products.map(( product, idx ) => {
                    
                    return <ProductCardS key={ product._id } product={ product } widthItem={ widthItem }/>
                    
                })
              }
          </div>
      </div>
    )
}
