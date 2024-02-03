const express = require('express');
const app = express()
const cors = require('cors')
const hostname = process.env.HOSTNAME || 'localhost' ;
const port = process.env.PORT || 5000;

app.use(cors())
app.get('/', (req, res) => {
    res.json('Me Abhi Jinda Hu')
})
app.listen(port, () => {
    console.log('server is running');
})