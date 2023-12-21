import React, { useState, useRef } from 'react';

import Modal from '../UI/Modal';
import Result from '../UI/Result';
import Header from '../UI/Header';
import {
    retrieveAddressData
} from '../utility/RequestHandler';
import '../styles/app.css';

const Crypto = () => {
    const [isLoading, setIsLoading] = useState();
    const addressInputRef = useRef();
    const assetInputRef = useRef();
    const dateFromInputRef = useRef();
    const dateToInputRef = useRef();
    const thresholdInputRef = useRef();

    const pickAddressHandler = async event => {
        event.preventDefault();
        const asset = assetInputRef.current.value;
        const address = addressInputRef.current.value;
        const dateFrom = dateFromInputRef.current.value;
        const dateTo = dateToInputRef.current.value;
        const threshold = thresholdInputRef.current.value;

        if (!address || address.trim().length === 0) {
            alert('Invalid address entered - please try again!');
            return;
        }

        // ... the same validation for the rest of fields

        setIsLoading(true);
        try {
            const data = await retrieveAddressData(asset, address, dateFrom, dateTo, threshold);
            setResult(data);
        } catch (err) {
            alert(err.message);
        }
        setIsLoading(false);
    };

    const setResult = (data) =>
    {
        console.log(data);
    }

    return (
        <React.Fragment>
            {isLoading && (
                <Modal>
                    <div className="modal__content centered">
                        <div className="lds-dual-ring"></div>
                    </div>
                </Modal>
            )}

            <Header title="Chain Explorer Light" />

            <section id="place-data">
                <form onSubmit={pickAddressHandler}>
                    <label htmlFor="asset">Asset</label>
                    <select id="asset" ref={assetInputRef}>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                    </select>

                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" ref={addressInputRef} />

                    <label htmlFor="time">Timeframe:</label>
                    <label htmlFor="date_from">from</label>
                    <input type="text" id="date_from" ref={dateFromInputRef} />
                    <label htmlFor="date_to">to</label>
                    <input type="text" id="date_to" ref={dateToInputRef} />

                    <label htmlFor="threshold">Threshold</label>
                    <input type="text" id="threshold" ref={thresholdInputRef} />

                    <button type="submit">Search</button>
                </form>
            </section>

            <Result>
                <div className="result__content centered">
                    <div className="result_count">Result:</div>
                    <div className="result_count">Tx</div>
                    <div className="average_quantity">avr. quantity</div>
                </div>
            </Result>

        </React.Fragment>
    );
};

export default Crypto;