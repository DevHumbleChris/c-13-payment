const axios = require("axios")

const generateToken = async (req, res, next) => {
    const secret = process.env.consumerSecret
    const consumer = process.env.consumerKey
    const auth = new Buffer.from(`${consumer}:${secret}`).toString('base64')
    await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
            authorization: `Basic ${auth}`
        }
    }).then(data => {
        console.log(data.data.access_token)
        token = data.data.access_token
        next()
    }).catch(err => {
        console.log(err.message)
    })
}

module.exports = {
    generateToken
}
