require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send("Login successful");
})


app.listen(process.env.PORT, () => console.log("Server is running on port " + process.env.PORT));