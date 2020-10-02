//object property shorthand

const name = 'andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Singapore'
}

console.log(user)

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined
}

// const {label, stock, rating = 5} = product

// console.log(label)
// console.log(rating)

const transcation = (type, {label, stock}) => {
    console.log(type)
    console.log(label)
    console.log(stock)
}

transcation('order', product)