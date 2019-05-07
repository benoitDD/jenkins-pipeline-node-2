const app = require('express')()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello :~)')
})

app.listen(PORT, () => {
    console.log('App ready on port ', PORT)
})