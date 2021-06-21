import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/App';

const app = express();
const PORT = 8088;

app.use('^/$', (req, res, next)=> {
    fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send("HTTP 500");
        }
        return res.status(200).send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
});

app.use(express.static(path.resolve(__dirname,'..','dist')));

app.listen(PORT , ()=> {
    console.log(`***** Server started at ${PORT} *****`);
});
