// Import library
import React from 'react';
// Import component, function, asset
import PaymentSection from "src/sections/body/PaymentSection";
import Page from 'src/components/Page';

const payment = () => {
    // UI
    return <Page title="Payment">
        <div className="flex justify-center"><PaymentSection /></div>
    </Page>
};

export default payment;
