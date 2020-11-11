import {Person} from "../store/modules/person/person";
import {Vehicle} from "../store/modules/vehicle/vehicle";

import axios from 'axios';

import Config from "../Config";

export interface IApplicationData {
    person: Person,
    vehicle: Vehicle
}

export const createApplication = (data: IApplicationData) => new Promise((resolve, reject) => {
    axios.post(Config.backendUrl, data)
        .then(res => {
            resolve();
        }).catch(reject);
});