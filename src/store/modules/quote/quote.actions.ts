import {Quote} from "./quote";

export enum QuoteActionTypes {
    SET_QUOTE = 'SET_QUOTE'
}

interface ISetQuote {
    type: QuoteActionTypes.SET_QUOTE,
    payload: Quote
}

export type QuoteActions = ISetQuote;

export const setQuote = (value: Quote): ISetQuote => ({
    type: QuoteActionTypes.SET_QUOTE,
    payload: value
})
