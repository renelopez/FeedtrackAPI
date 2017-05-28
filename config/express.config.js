import express from 'express'
import bodyParser from 'body-parser';
import sourceMapSupport from 'source-map-support';

export default expressConfig = (config,app) =>{
    sourceMapSupport.install();
    app.use(express.static('static'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
}


