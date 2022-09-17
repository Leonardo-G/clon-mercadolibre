import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faCreditCard as faCreditCardSolid, faHandHoldingHeart, faMoneyBillWave, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Payment = () => {
    return (
        <div className='flex-row background-wh p-3 shadow-static radius-default space-around align-center'>
            <div className='flex c-gap-2 align-center'>
                <div>
                    <FontAwesomeIcon 
                        icon={ faCreditCard }
                        className="font-l color-blue"    
                    />
                </div>
                <div className='ml-1'>
                    <p className='font-l'>Tarjeta de crédito</p>
                    <p className='color-blue pointer'>Ver promociones bancarias</p>
                </div>
            </div>
            <div className='flex c-gap-2 align-center'>
                <div>
                    <FontAwesomeIcon 
                        icon={ faCreditCardSolid }
                        className="font-l color-blue"    
                    />
                </div>
                <div className='ml-1'>
                    <p className='font-l'>Tarjeta de débito</p>
                    <p className='color-blue pointer'>Ver más</p>
                </div>
            </div>
            <div className='flex c-gap-2 align-center'>
                <div>
                    <FontAwesomeIcon 
                        icon={ faHandHoldingHeart }
                        className="font-l color-blue"    
                    />
                </div>
                <div className='ml-1'>
                    <p className='font-l'>Cuotas sin tarjeta</p>
                    <p className='color-blue pointer'>Conocé Mercado Crédito</p>
                </div>
            </div>
            <div className='flex c-gap-2 align-center'>
                <div>
                    <FontAwesomeIcon 
                        icon={ faMoneyBillWave }
                        className="font-l color-blue"    
                    />
                </div>
                <div className='ml-1'>
                    <p className='font-l'>Efectivo</p>
                    <p className='color-blue pointer'>Ver más</p>
                </div>
            </div>
            <div 
                className='background-blue circle relative pointer'
                style={{
                    height: "3rem",
                    width: "3rem"
                }}
            >
                <FontAwesomeIcon 
                    icon={ faPlus }
                    className="font-m color-wh pos-center"   
                />
            </div>
        </div>
    )
}
