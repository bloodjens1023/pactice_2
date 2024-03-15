import React, { useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const Paiement = () => {

  return (
    <form >
      <CardElement />
    </form>
  );
};

export default Paiement;
