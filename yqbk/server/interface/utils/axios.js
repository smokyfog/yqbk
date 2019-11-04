const axios = require('axios')

const request = axios.create({
  baseURL: `http://${process.env.HOST||'localhost'}:${process.env.PORT||8001}`,
  timeout: 5000,
  headers: {

  }
})

module.exports = request
