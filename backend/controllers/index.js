const axios = require("axios");
const { generateToken } = require('../middlewares')
const User = require('../models/User')

module.exports = {
  index: (req, res) => {
    res.json({
      message: 'Sorry Wrong Route'
    })
  },
  stkRoute: async (req, res) => {
    const phoneNumber = req.body.phoneNumber.substring(1);
    const amount = req.body.amount;
    const date = new Date()
    const timestamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    const shortCode = process.env.shortCode
    const passKey = process.env.passKey
    const password = new Buffer.from(shortCode + passKey + timestamp).toString('base64')
    await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phoneNumber}`,
        PartyB: shortCode,
        PhoneNumber: `254${phoneNumber}`,
        CallBackURL: "https://api-c-13-payment.vercel.app/callback",
        AccountReference: `254${phoneNumber}`,
        TransactionDesc: "test",
      },
      {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }
    ).then(data => {
        console.log(data.data)
        res.json({
            response: data.data
        })
    }).catch(err => {
        console.log(err.message)
    })
  },
  tokenGeneration: async (req, res) => {
    generateToken()
  },
  callbackURl: async (req, res) => {
    res.json({
      data: req.body
    })
  }
};
