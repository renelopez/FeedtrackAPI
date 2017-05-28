import express from 'express';
import configRoutes from './routes/feedbackRoutes';
import appConfig from './config/app.config'
import configMongoose from './config/mongoose.config'

const app = express();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const appSettings=appConfig[env];

configMongoose(appSettings);
configRoutes(app);

app.listen(appSettings.port, () => {
    console.log('Feedtrack API running on port 3000');
});