const express = require('express')
const sequelize = require('./db')

sequelize.sync().then(() => console.log('db is ready'))

const app = express()
app.listen(3000, () => {
    console.log('app is running on port 3000')
})