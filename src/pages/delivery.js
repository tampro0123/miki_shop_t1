// Import library
import React from 'react';
// Import component, function, asset
import Header from "src/layouts/header";
import Footer from "src/layouts/footer";
import DeliverySection from "src/sections/body/DeliverySection";

const delivery = () => {
    // UI
    return <div className="flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <DeliverySection />
        <Footer />
    </div>
};

export default delivery;
