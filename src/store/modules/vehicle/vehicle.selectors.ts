import {rootState} from "../../index";

export const getRegistrationNumber = (state: rootState) => state.vehicle.registrationNumber;
export const getBonusLevel = (state: rootState) => state.vehicle.bonusLevel;
