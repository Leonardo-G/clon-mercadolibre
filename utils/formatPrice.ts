export const formatPrice = ( price: number ) => {
    const priceFormat = price.toLocaleString("es-AR", options);

    return priceFormat
}

export const discountPercentage = ( currentPrice: number, offerPrice: number ) => {
    const percentage = Math.round(((currentPrice - offerPrice) / currentPrice ) * 100 );

    return percentage
}

const options = {
    style: "currency",
    currency: "ARS",
    maximumFractionDigit: 0,
    minimumFractionDigits: 0
}