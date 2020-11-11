import {createStore, combineReducers} from "redux";

import {personReducer} from "./modules/person/person.reducer";
import {vehicleReducer} from "./modules/vehicle/vehicle.reducer";

const rootReducer = combineReducers({
    person: personReducer,
    vehicle: vehicleReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
