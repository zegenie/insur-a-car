export enum VehicleBonusType {
    VehicleBonusType30 = '30',
    VehicleBonusType40 = '40',
    VehicleBonusType50 = '50',
    VehicleBonusType60 = '60',
    VehicleBonusType70 = '70',
    VehicleBonusType75 = '75',
    VehicleBonusType75Plus1 = '75-1',
    VehicleBonusType75Plus2 = '75-2',
    VehicleBonusType75Plus3 = '75-3',
    VehicleBonusType75Plus4 = '75-4',
    VehicleBonusType75Plus5 = '75-5',
    VehicleBonusType80 = '80'
}

export type Vehicle = {
    registrationNumber: string,
    bonusLevel ?: VehicleBonusType
}
