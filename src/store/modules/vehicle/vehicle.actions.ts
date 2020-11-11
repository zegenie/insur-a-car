import {VehicleBonusType} from "./vehicle";

export enum VehicleActionTypes {
    SET_REGISTRATION_NUMBER = 'SET_REGISTRATION_NUMBER',
    SET_BONUS_LEVEL = 'SET_BONUS_LEVEL',
}

interface ISetRegistrationNumber {
    type: VehicleActionTypes.SET_REGISTRATION_NUMBER,
    payload: string
}

interface ISetBonusLevel {
    type: VehicleActionTypes.SET_BONUS_LEVEL,
    payload: VehicleBonusType
}

export type VehicleActions = ISetRegistrationNumber | ISetBonusLevel;

export const setRegistrationNumber = (value: string): ISetRegistrationNumber => ({
    type: VehicleActionTypes.SET_REGISTRATION_NUMBER,
    payload: value
});

export const setBonusLevel = (value: VehicleBonusType): ISetBonusLevel => ({
    type: VehicleActionTypes.SET_BONUS_LEVEL,
    payload: value
});