import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
        next();

});

// db config
const connection_url = "mongodb+srv://admin:tObaFv20LXSa6zdL@cluster0.ho59l.mongodb.net/" +
    "tiktok?retryWrites=true&w=majority"
// admin
// tObaFv20LXSa6zdL
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// api routes/endpoints

app.get('/', (req, res) => {
    res.status(200).send("<h1>hello</h1>");
});
app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
});

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    });
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(201).send(data);
    });
});


// listeners
app.listen(port, () => console.log(`listening on localhost ${port}`));