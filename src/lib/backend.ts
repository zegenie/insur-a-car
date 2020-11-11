import {Person} from "../store/modules/person/person";
import {Vehicle} from "../store/modules/vehicle/vehicle";

import axios from 'axios';

import Config from "../Config";
import {Quote} from "../store/modules/quote/quote";
import {setQuote} from "../store/modules/quote/quote.actions";

export interface IApplicationData {
    person: Person,
    vehicle: Vehicle
}

export const createApplication = (data: IApplicationData): Promise<Quote> => new Promise((resolve, reject) => {
    axios.post(Config.backendUrl, data)
        .then(res => {
            setQuote(res.data);

            resolve(res.data as Quote);
        }).catch(reject);
});