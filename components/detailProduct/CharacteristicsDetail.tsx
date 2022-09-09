import React, { FC } from 'react';
import { ICharacteristicsDetail } from '../../interface/products';

interface Props {
    characteristicsDetail: ICharacteristicsDetail[]
}

export const CharacteristicsDetail: FC<Props> = ({ characteristicsDetail }) => {
    return (
        <>
            <p className='font-xxl mb-2'>Características</p>
            <div className='flex-row' style={{ rowGap: "4rem", columnGap: "4rem" }}>
                <div className='f-auto'>
                    {
                        characteristicsDetail?.map(( cd, idx ) => (
                            idx % 2 === 0 &&
                            <div key={ idx } className="my-2 f-auto">
                                <p className='font-m f-bold mb-2 capitalize'>{ cd.code }</p>
                                <div className='radius-default' style={{ border: "1px solid #ededed"}}>
                                    {
                                        cd.info.map((c, id) => {
                                            if( id % 2 === 0 ){
                                                return (
                                                    <div className='flex-row p-2 flex-left' key={ id } style={{ background: "rgba(0,0,0,.08)" }}>
                                                        <p className='font-s f-auto f-bold capitalize'>{ c.title }</p>       
                                                        <p className='font-s f-auto f-bold capitalize'>{ c.description }</p>       
                                                    </div>
                                                )
                                            }
                                            return (
                                                <div className='flex-row p-2 flex-left' key={ id }>
                                                    <p className="font-s f-auto f-bold capitalize">{ c.title }</p>       
                                                    <p className="font-s f-auto f-bold capitalize">{ c.description }</p>       
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) )
                    }
                </div>
                <div className='f-auto'>
                    {
                        characteristicsDetail?.map(( cd, idx ) => (
                            idx % 2 === 1 &&
                            <div key={ idx } className="my-2 f-auto">
                                <p className='font-m f-bold mb-2 capitalize'>{ cd.code }</p>
                                <div className='radius-default' style={{ border: "1px solid #ededed"}}>
                                    {
                                        cd.info.map((c, id) => {
                                            if( id % 2 === 0 ){
                                                return (
                                                    <div className='flex-row p-2 flex-left' key={ id + idx } style={{ background: "rgba(0,0,0,.08)" }}>
                                                        <p className='font-s f-auto f-bold capitalize'>{ c.title }</p>       
                                                        <p className='font-s f-auto f-bold capitalize'>{ c.description }</p>       
                                                    </div>
                                                )
                                            }
                                            return (
                                                <div className='flex-row p-2 flex-left' key={ id + idx }>
                                                    <p className="font-s f-auto f-bold capitalize">{ c.title }</p>       
                                                    <p className="font-s f-auto f-bold capitalize">{ c.description }</p>       
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}
