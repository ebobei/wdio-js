require('dotenv').config();


module.exports = {
    phonenumber : process.env.PHONE_NUMBER,
    email : process.env.EMAIL,
    password : process.env.PASSWORD,
    adminLogin : process.env.ADMIN_LOGIN,
    adminPassword : process.env.ADMIN_PASSWORD,
    releaseLoyaltyAllConfirm: {
        email: process.env.LOYALITY_EMAIL,
        password : process.env.LOYALITY_PASSWORD,
    },

};