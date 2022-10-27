# Group C-13 Hackathon (Backend) - Payment Intergration

## Technologies

1. Express
2. Daraja API

## Summary

LIPA NA M-PESA ONLINE API also know as M-PESA express (STK Push) is a Merchant/Business initiated C2B (Customer to Business) Payment. Me and the group when ahead a build a working backend API that queries the Safaricom Daraja API to execute the LIPA NA M-PESA stk push.

## Setup - Backend API

1. ```git clone```
2. ```cd backend```
3. ```yarn install```
4. ```yarn start```

## Routes

Home  - GET

```console
http://localhost:5000/
```

STK route - POST
> parameters

```javascript
{
    "phoneNumber": "07xxxxxx",
    "amount": "10"
}
```

```console
http://localhost:5000/stk
```
