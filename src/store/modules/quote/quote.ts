import {Vehicle} from "../vehicle/vehicle";
import {Person} from "../person/person";

enum QuoteStatus {
    QUOTE_CREATED = "quote_created",
    LETTER_SENT = "letter_sent"
}

interface IQuoteData {
    status: QuoteStatus,
    quoteNumber: string,
    data: Vehicle
}

export enum CustomerStatus {
    DRAFT = "draft",
    CREATED = "created"
}

interface ICustomer {
    status: CustomerStatus,
    customerNumber ?: string,
    data ?: Person
}

export type Quote = {
    customer: ICustomer,
    quote ?: IQuoteData
}
