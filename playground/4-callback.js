// setTimeout(()=>{
//     console.log('2 seconds')
// }, 2000)

// const name = ['Andrew', 'Jen', 'jess']

// const shortNames = name.filter((name)=>{
//     return name.length <= 4
// })

const geocode = (address, callback) => {
    const data = {
        lat: 0,
        long: 0
    }

    callback(data)
}

geocode('singapore', (data)=>{
    console.log(data)
})
// console.log(data)
