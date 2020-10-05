const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d1b4ba998d7f611ab7440545dabf31ac&query=${
    (lat, long)
  }$units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.');
    }
  });
};

module.exports = forecast;
