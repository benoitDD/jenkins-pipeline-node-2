const app = require('express')()

const PORT = 9191

app.get('/', (req, res) => {
    res.send('Hello :~)')
})

app.listen(PORT, () => {
    console.log('App ready on port ', PORT)
})