// Import library
import React from 'react';
// Import component, function, asset
import Header from "src/layouts/header";
import Footer from "src/layouts/footer";
import PaymentSection from "src/sections/body/PaymentSection";

const payment = () => {
    // UI
    return <div className="overflow-hidden">
        <Header />
        <div className="flex justify-center"><PaymentSection /></div>
        <Footer />
    </div>
};

export default payment;
