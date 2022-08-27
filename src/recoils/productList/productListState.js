// import Library
import { atom, selector } from 'recoil';
// Import component, function, asset

export const productsState = atom({
    key: 'products',
    default: [
        {
            id: 0,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
        {
            id: 1,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
        {
            id: 2,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
        {
            id: 3,
            name: "Lira Earrings",
            price: 599000,
            quantity: 2,
        },
        {
            id: 4,
            name: "Lira Earrings",
            price: 599000,
            quantity: 5,
        },
    ],
});

export const minus1 = (products, id) => {
    const newProducts = [...products];
    newProducts[id] = {
        ...newProducts[id],
        quantity: newProducts[id].quantity <= 0 ? newProducts[id].quantity : newProducts[id].quantity - 1,
    };
    return newProducts;
};

export const increase1 = (products, id) => {
    const newProducts = [...products];
    newProducts[id] = {
        ...newProducts[id],
        quantity: newProducts[id].quantity + 1,
    };
    return newProducts;
};

export const totalPriceOfProductsState = selector({
    key: "totalPriceOfProducts",
    get: ({ get }) => {
        const products = get(productsState);
        return products.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    },
});

export const ortherFeesState = atom({
    key: 'ortherFees',
    default: {
        transportFee: 20000,
        discount: 200000,
    }
});

export const lastPriceState = selector({
    key: "lastPrice",
    get: ({ get }) => {
        const products = get(productsState);
        const ortherFees = get(ortherFeesState);
        return (ortherFees.transportFee - ortherFees.discount + products.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0))
    },
});