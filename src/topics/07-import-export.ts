import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] =[
    {
        description: 'Nokia A1',
        price: 100
    },
    {
        description: 'ipad M1',
        price: 200
    }
];

const tax = 0.15;

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total );
console.log('Tax', taxTotal );
