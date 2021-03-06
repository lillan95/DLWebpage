import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Test';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://[server]/tests');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));


router.route('/tests').get((req, res) => {
    Issue.find((err, tests) => {
        if (err)
            console.log(err);
        else
            res.json(tests);
    });
});