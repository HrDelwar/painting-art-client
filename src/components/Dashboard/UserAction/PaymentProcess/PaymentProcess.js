import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PAYMENT_KEY } from '../../../../env';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(PAYMENT_KEY);

const PaymentProcess = ({ handleOrderPlace }) => {
    return (
        <Elements stripe={stripePromise}>
            <h5 className="text-capitalize mt-5">payment with card</h5>
            <CheckoutForm handleOrderPlace={handleOrderPlace} />
        </Elements>
    );
};

export default PaymentProcess;