import React, { FC, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { productsDB } from '../../database/products';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardS } from './ProductCardS';

interface Props {
  products?: []
}

export const ProductList: FC<Props> = ({ products }) => {
    return (
      <div className='relative mt-2' style={{ minHeight: "38rem" }}>
          <div className='pos-initial flex-row c-gap-2'>
              {
                  productsDB.map( product => (
                      <ProductCardS key={ product._id } product={ product } />
                  ))
              }
          </div>
      </div>
    )
}
