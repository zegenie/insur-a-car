export enum PersonActionTypes {
    SET_FIRST_NAME = 'SET_FIRST_NAME',
    SET_LAST_NAME = 'SET_LAST_NAME',
    SET_SSNO = 'SET_SSNO',
    SET_EMAIL = 'SET_EMAIL'
}

interface ISetFirstName {
    type: PersonActionTypes.SET_FIRST_NAME,
    payload: string
}

interface ISetLastName {
    type: PersonActionTypes.SET_LAST_NAME,
    payload: string
}

interface ISetSSNo {
    type: PersonActionTypes.SET_SSNO,
    payload: string
}

interface ISetEmail {
    type: PersonActionTypes.SET_EMAIL,
    payload: string
}

export type PersonActions = ISetFirstName | ISetLastName | ISetSSNo | ISetEmail;

export const setFirstName = (value: string): ISetFirstName => ({
    type: PersonActionTypes.SET_FIRST_NAME,
    payload: value
})

export const setLastName = (value: string): ISetLastName => ({
    type: PersonActionTypes.SET_LAST_NAME,
    payload: value
})

export const setSsno = (value: string): ISetSSNo => ({
    type: PersonActionTypes.SET_SSNO,
    payload: value
})

export const setEmail = (value: string): ISetEmail => ({
    type: PersonActionTypes.SET_EMAIL,
    payload: value
})
