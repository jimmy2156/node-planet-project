const express = require('express')
const app = express()
 const friendRouter = require('./routes/friends.route')
 const path = require('path')
const { dirname } = require('path')
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use('/friend', friendRouter)
app.use('/static', express.static(path.join(__dirname,'public')))
app.get('/', (req,res) => {
    res.render('index', {
        Heading1: "New static page website",
        title: "Jibaro wallpaer"
    })
})






const port = 3000
app.listen(port, () => {
    console.log(`its working on ${port}`)
})