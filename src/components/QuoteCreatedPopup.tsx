import React from "react";
import {useTranslation} from "react-i18next";
import {Modal} from "react-bootstrap";
import {Quote} from "../store/modules/quote/quote";
import {useSelector} from "react-redux";
import {getQuote} from "../store/modules/quote/quote.selectors";

type QuoteCreatedPopupProps = {
    show: boolean
}

const QuoteCreatedPopup: React.FC<QuoteCreatedPopupProps> = (props: QuoteCreatedPopupProps) => {
    const {t} = useTranslation();
    const createdQuote = useSelector(getQuote);

    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>{ t('application.confirm.header') }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ t('application.confirm.body') }</Modal.Body>
        </Modal>
    )
}

export default QuoteCreatedPopup;