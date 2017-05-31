import mongoose from 'mongoose';
import bluebird from 'bluebird';

const configMongoose = (settings) => {
    mongoose.Promise=bluebird;

    mongoose.connect(settings.db);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Feedtrack db opened');
    });
};

export default configMongoose;

