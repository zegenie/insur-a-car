import {Vehicle} from "./vehicle";
import {VehicleActions, VehicleActionTypes} from "./vehicle.actions";

const initialState: Vehicle = {
    registrationNumber: '',
    bonusLevel: undefined
};

export function vehicleReducer(
    state = initialState,
    action: VehicleActions
): Vehicle {
    switch (action.type) {
        case VehicleActionTypes.SET_REGISTRATION_NUMBER:
            return {
                ...state,
                registrationNumber: action.payload
            };
        case VehicleActionTypes.SET_BONUS_LEVEL:
            return {
                ...state,
                bonusLevel: action.payload
            };
    }

    return state;
}