import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEmail, getFirstName, getLastName, getPerson, getSsno} from "../store/modules/person/person.selectors";

import {setEmail, setFirstName, setLastName, setSsno} from "../store/modules/person/person.actions";
import {getBonusLevel, getRegistrationNumber, getVehicle} from "../store/modules/vehicle/vehicle.selectors";
import {useTranslation, withTranslation, WithTranslation} from "react-i18next";

import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {VehicleBonusType} from "../store/modules/vehicle/vehicle";
import {setBonusLevel, setRegistrationNumber} from "../store/modules/vehicle/vehicle.actions";

import validator from 'validator';
import VehicleBonusSelector from "../components/VehicleBonusSelector";
import {createApplication} from "../lib/backend";

const Application: React.FC<WithTranslation> = () => {
    const { t } = useTranslation();
    const [isSubmitting, setSubmitting] = useState<boolean>(false);
    const [isErrorSubmitting, setErrorSubmitting] = useState<boolean>(false);

    const firstName = useSelector(getFirstName);
    const lastName = useSelector(getLastName);
    const ssNo = useSelector(getSsno);
    const email = useSelector(getEmail);
    const registrationNumber = useSelector(getRegistrationNumber);
    const bonusLevel = useSelector(getBonusLevel);

    const person = useSelector(getPerson);
    const vehicle = useSelector(getVehicle);

    const dispatch = useDispatch();

    const personFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstName(e.currentTarget.value));
    };

    const personLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastName(e.currentTarget.value));
    };

    const personEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    };

    const personSsnoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSsno(e.currentTarget.value));
    };

    const vehicleBonusLevelChange = (value: VehicleBonusType) => {
        dispatch(setBonusLevel(value));
    }

    const vehicleRegistrationNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRegistrationNumber(e.currentTarget.value));
    }

    const submitForm = (e: FormEvent<any>) => {
        e.preventDefault();
        e.stopPropagation();

        if (canSubmit()) {
            setErrorSubmitting(false);
            setSubmitting(true);
            createApplication({
                person,
                vehicle
            }).then(() => {
            }).catch(() => {
                setErrorSubmitting(true);
            }).finally(() => {
                setSubmitting(false);
            })
        }
    }

    const canSubmit = (): boolean => {
        if (firstName.length < 2 || lastName.length < 2)
            return false;

        if (!registrationNumber.match(/[A-Z]{2}[0-9]{5}/))
            return false;

        if (!validator.isEmail(email))
            return false;

        if (!ssNo.match(/[0-9]{11}/))
            return false;

        return true;
    }

    return (
        <Container className="insurance-application">
            <Row className="justify-content-md-center">
                <h1>{ t('application.header') }</h1>
            </Row>
            <Row>
                <Col>
                    <div className="preface">
                        { t('application.introduction') }
                    </div>
                </Col>
            </Row>
            <Form onSubmit={submitForm}>
                <Row>
                    <Col sm={4}>
                        <Form.Group controlId="vehicleRegistrationNumber">
                            <Form.Label>{ t('application.vehicle.registrationNumber.label')}</Form.Label>
                            <Form.Control type="text" placeholder="AB12345" pattern="[A-Z]{2}[0-9]{5}" value={registrationNumber} onChange={vehicleRegistrationNumberChange} />
                            <Form.Text className="error">
                                <FontAwesomeIcon icon="circle" /><span>{ t('application.vehicle.registrationNumber.error')}</span>
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form.Group controlId="vehicleBonusLevel">
                            <Form.Label>{ t('application.vehicle.bonusLevel.label')}</Form.Label>
                            <VehicleBonusSelector bonusLevel={bonusLevel} change={vehicleBonusLevelChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form.Group controlId="personSsno">
                            <Form.Label>{ t('application.person.ssno.label')}</Form.Label>
                            <Form.Control type="text" pattern="[0-9]{11}" value={ssNo} onChange={personSsnoChange} />
                            <Form.Text className="error">
                                <FontAwesomeIcon icon="circle" /><span>{ t('application.person.ssno.error')}</span>
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form.Group controlId="personFirstName">
                            <Form.Label>{ t('application.person.firstName.label')}</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={personFirstNameChange} />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="personLastName">
                            <Form.Label>{ t('application.person.lastName.label')}</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={personLastNameChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form.Group controlId="personEmail">
                            <Form.Label>{ t('application.person.email.label')}</Form.Label>
                            <Form.Control type="email" value={email} onChange={personEmailChange} />
                            <Form.Text className="error">
                                <FontAwesomeIcon icon="circle" /><span>{ t('application.person.email.error')}</span>
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit" disabled={!canSubmit() || isSubmitting}>
                            <span>{ t('application.form.submit') }</span>
                            {(isSubmitting && (
                                <FontAwesomeIcon icon="spinner" className="fa-spin" />
                            ))}
                        </Button>
                    </Col>
                </Row>
                {(isErrorSubmitting && (
                    <Row>
                        <Form.Group>
                            <Form.Text className="error">
                                <FontAwesomeIcon icon="exclamation-triangle" />
                                <span>{ t('application.form.error') }</span>
                            </Form.Text>
                        </Form.Group>
                    </Row>
                ))}
            </Form>
            <Row>
                Name: {`${firstName} ${lastName}`}
            </Row>
        </Container>
    )
};

export default withTranslation()(Application);