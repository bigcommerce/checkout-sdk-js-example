import React from 'react';
import InputContainer from '../../../components/InputContainer/input-container';
import styles from './square-payment-form.scss';

export default class SquarePaymentForm extends React.PureComponent {
    render() {
        return (
            <div className={ styles.container }>
                <div className="square-container">
                    <InputContainer
                        id={ 'square-paymentCCNumber' }
                        label={ 'Credit Card Number' }
                        width={ 'full' }
                        body={
                            <div id="square-paymentCCNumber" />
                        } />

                    <InputContainer
                        id={ 'square-paymentCCV' }
                        label={ 'CVV' }
                        width={ 'full' }
                        body={
                            <div id="square-paymentCCV" />
                        } />

                    <InputContainer
                        id={ 'square-paymentExpiry' }
                        label={ 'Expiry' }
                        width={ 'full' }
                        body={
                            <div id="square-paymentExpiry" />
                        } />

                    <InputContainer
                        id={ 'square-paymentPostCode' }
                        label={ 'Postal Code' }
                        width={ 'full' }
                        body={
                            <div id="square-paymentPostCode" />
                        } />
                </div>
            </div>
        );
    }
}
