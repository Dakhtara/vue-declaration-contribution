import CurrencyFormatter from "../services/CurrencyFormatter";

const currencyFormatter = CurrencyFormatter.getInstance();

export default function usePriceFormatter(): {formatPrice: (price: number) => string} {

    const formatPrice = (price: number): string => {
        return currencyFormatter.formatBasic(price)
    }


    return {
        formatPrice
    }
}
