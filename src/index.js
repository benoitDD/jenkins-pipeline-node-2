const app = require('express')()

const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Hello :~) and CI: ${process.env.CI}, with secret: ${process.env.UN_SECRET}`)
})

app.get('/secrets', (req, res) => {
    res.send(`PORT :${process.env.PORT}, DB_LOGIN :${process.env.DB_LOGIN}, DB_PASSWORD :${process.env.DB_PASSWORD}`)
})

app.listen(PORT, () => {
    console.log(`App on mode CI: ${process.env.CI}, with secret: ${process.env.UN_SECRET} ready on port ${PORT}`)
})