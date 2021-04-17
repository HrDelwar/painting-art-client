import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
    const fontSize = "20px";
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const CheckoutForm = ({ handleOrderPlace }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [paymentError, setPaymentError] = useState(null);
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        if (payload.error) {
            setPaymentError(payload.error.message);
        }
        if (payload.paymentMethod) {
            setPaymentError(null);
            handleOrderPlace(payload.paymentMethod.id)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className=" mb-3">
                <label for="basic-url" className="form-label">Card number</label>
                <CardNumberElement
                    options={options}
                />
            </div>

            <div className="mb-3">
                <label for="basic-url" className="form-label">Expiration date</label>
                <CardExpiryElement
                    options={options}
                />
            </div>
            <div className="mb-3">
                <label for="basic-url" className="form-label">CVC</label>
                <CardCvcElement
                    options={options}
                />
            </div>

            <button type="submit" className="btn-custom text-uppercase" disabled={!stripe}>
                 order place
             </button>
            <p className="text-center">{paymentError ? paymentError : ''}</p>
        </form>
    );
};

export default CheckoutForm;