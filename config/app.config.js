const appConfig ={
    development: {
        db: 'mongodb://localhost:27017/feedtrack',
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
        port: process.env.PORT || 80
    }
};

export default appConfig;