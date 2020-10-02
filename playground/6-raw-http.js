const http = require("http");

const url = 'http://api.weatherstack.com/current?access_key=d1b4ba998d7f611ab7440545dabf31ac&query=$units=m';

const request = http.request(url, (response) => {

    let data = '';

    response.on("data", (chunk) => {
        data = data + chunk.toString()
    });
    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    });
});

request.on('error', (error)=> {
    console.log('An error', error)
})

request.end()