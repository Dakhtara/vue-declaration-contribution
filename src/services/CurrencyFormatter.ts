
export default class CurrencyFormatter
{
    private static instance: CurrencyFormatter;

    private constructor() {
    }

    formatBasic(value: number): string
    {
        return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(value / 100);
    }

    public static getInstance(): CurrencyFormatter {
        if (!CurrencyFormatter.instance) {
            CurrencyFormatter.instance = new CurrencyFormatter();
        }

        return CurrencyFormatter.instance;
    }
}
