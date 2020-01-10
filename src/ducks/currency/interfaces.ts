interface CurrencyInterface {
    date: string;
    id: string;
    numCode: string;
    charCode: string;
    name: string;
    nominal: number;
    value: number;
    previous: number;
}

export interface CurrenciesListInterface {
    currencyList: Array<CurrencyInterface> | [];
}
