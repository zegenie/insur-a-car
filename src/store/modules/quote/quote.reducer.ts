import {QuoteActions, QuoteActionTypes} from "./quote.actions";
import {CustomerStatus, Quote} from "./quote";

const initialState: Quote = {
    customer: {
        status: CustomerStatus.DRAFT
    }
};

export function quoteReducer(
    state = initialState,
    action: QuoteActions
): Quote {
    switch (action.type) {
        case QuoteActionTypes.SET_QUOTE:
            return action.payload;
    }

    return state;
}