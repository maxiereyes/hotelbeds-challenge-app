export const getFormatPrice = ({price, currencyId}: {price: number, currencyId: string}) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyId
    }).format(price)
}