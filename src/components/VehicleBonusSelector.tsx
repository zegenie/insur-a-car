import React from "react";
import {useTranslation, withTranslation, WithTranslation} from "react-i18next";
import {Dropdown, Form} from "react-bootstrap";
import {VehicleBonusType} from "../store/modules/vehicle/vehicle";

type VehicleBonusSelectorProps = {
    bonusLevel ?: VehicleBonusType,
    change: (value: VehicleBonusType) => void
}

const VehicleBonusSelector: React.FC<VehicleBonusSelectorProps> = (props: VehicleBonusSelectorProps) => {
    const {t} = useTranslation();

    const getBonusLevelDisplayValue = (value: VehicleBonusType): string => {
        switch (value) {
            case VehicleBonusType.VehicleBonusType75Plus1:
                return t('application.vehicle.bonusLevel.75plus1');
            case VehicleBonusType.VehicleBonusType75Plus2:
                return t('application.vehicle.bonusLevel.75plus2');
            case VehicleBonusType.VehicleBonusType75Plus3:
                return t('application.vehicle.bonusLevel.75plus3');
            case VehicleBonusType.VehicleBonusType75Plus4:
                return t('application.vehicle.bonusLevel.75plus4');
            case VehicleBonusType.VehicleBonusType75Plus5:
                return t('application.vehicle.bonusLevel.75plus5');
            default:
                return `${value}%`;
        }
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light">
                <span>{ (props.bonusLevel === undefined) ? t('application.vehicle.bonusLevel.dropdown') : getBonusLevelDisplayValue(props.bonusLevel) }</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType30)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType30)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType40)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType40)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType50)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType50)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType60)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType60)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType70)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType70)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75Plus1)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75Plus1)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75Plus2)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75Plus2)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75Plus3)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75Plus3)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75Plus4)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75Plus4)}</Dropdown.Item>
                <Dropdown.Item onClick={() => props.change(VehicleBonusType.VehicleBonusType75Plus5)}>{getBonusLevelDisplayValue(VehicleBonusType.VehicleBonusType75Plus5)}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default VehicleBonusSelector;
