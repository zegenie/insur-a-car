import {Person} from "./person";
import {PersonActions, PersonActionTypes} from "./person.actions";

const initialState: Person = {
    firstName: '',
    lastName: '',
    ssno: '',
    email: ''
};

export function personReducer(
    state = initialState,
    action: PersonActions
): Person {
    switch (action.type) {
        case PersonActionTypes.SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case PersonActionTypes.SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            };
        case PersonActionTypes.SET_SSNO:
            return {
                ...state,
                ssno: action.payload
            };
        case PersonActionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
    }

    return state;
}