import mongoose from 'mongoose';

export default configure = (settings) => {
    mongoose.connect(settings.db);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Feedtrack db opened');
    });
}

