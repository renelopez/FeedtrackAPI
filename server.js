import express from 'express'
import bodyParser from 'body-parser';
import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();

const app=express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.listen(3000,function(){
    console.log('Feedtrack API running on port 3000');
});