const app = require('express')()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello :~) and CI:', process.env.CI)
})

app.listen(PORT, () => {
    console.log(`App on mode ${process.env.CI} ready on port ${PORT}`)
})