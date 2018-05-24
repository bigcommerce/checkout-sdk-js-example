import React, { Fragment } from 'react';
import RadioInput from '../../components/RadioInput/radio-input';
import PaymentForm from './PaymentForm/payment-form';
import SquarePaymentForm from './SquarePaymentForm/square-payment-form';

export default class PaymentMethod extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <RadioInput
                    name={ 'paymentMethod' }
                    value={ this.props.method.id }
                    label={ this.props.method.config.displayName }
                    onChange={ this.props.onClick } />

                { this._shouldShowPaymentForm() &&
                    <PaymentForm
                        methodId={ this.props.method.id }
                        onChange={ this.props.onChange } />
                }

                { this._shouldShowSquarePaymentForm() &&
                    <SquarePaymentForm />
                }
            </Fragment>
        );
    }

    _shouldShowPaymentForm() {
        return this.props.selected === this.props.method.id && this.props.method.type !== 'PAYMENT_TYPE_OFFLINE' && this.props.method.id !== 'squarev2';
    }

    _shouldShowSquarePaymentForm() {
        return this.props.selected === this.props.method.id && this.props.method.id === 'squarev2';
    }
}
