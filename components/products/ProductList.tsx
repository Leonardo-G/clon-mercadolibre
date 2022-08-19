import React, { FC, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { productsDB } from '../../database/products';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardS } from './ProductCardS';
import { IProduct } from '../../interface/products';

interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
    return (
      <div className='relative mt-2' style={{ minHeight: "38rem" }}>
          <div className='pos-initial flex-row c-gap-2'>
              {
                  products.map( product => (
                      <ProductCardS key={ product._id } product={ product } />
                  ))
              }
          </div>
      </div>
    )
}
