import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config")
    .then(async (res) => {
      // console.log('hiih', res.json())
      console.log(await res.json())
      // console.log(publishableKey)
    })
  }, [])


  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {/* {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )} */}
    </>
  );
}

export default Payment