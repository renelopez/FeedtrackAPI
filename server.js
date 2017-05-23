import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import feedbackRoutes from './routes/feedbackRoutes';

SourceMapSupport.install();
mongoose.connect('mongodb://localhost/feedtrack');

const app = express();
feedbackRoutes(app);




app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(3000, () => {
    console.log('Feedtrack API running on port 3000');
});