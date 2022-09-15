import express from 'express';

import exampleRoutes from './routes/exampleRoutes.js';

const app = express();

//parse json body information from http body to req.body.* object.
app.use(express.json());

app.use('/example', exampleRoutes);

app.listen(3000, () => {
    console.log("Listening for requests....")
});