import {rootState} from "../../index";

export const getFirstName = (state: rootState) => state.person.firstName;
export const getLastName = (state: rootState) => state.person.lastName;
export const getSsno = (state: rootState) => state.person.ssno;
export const getEmail = (state: rootState) => state.person.email;

export const getPerson = (state: rootState) => state.person;
