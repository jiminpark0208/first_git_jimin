const express = require('express');
const app = express () ;

const sever  = app.listen (3001, () => {
    console.log ('start Sever : localhost :3001')

});

app.get('api/user/:type', async (req, res)) => {
    res.send('connect.') ;
});