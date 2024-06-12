const express = require('express');
const app = express();
const router = require('./src/routes');

require('./startup/config')(app,express);
require('./startup/db')();
require('./startup/logging')();
require('./startup/cors')(app);

app.use('/api',router);



const port = process.env.PORT|| 5000;
app.listen(port,()=>{console.log(`listening on port ${port}`)});
