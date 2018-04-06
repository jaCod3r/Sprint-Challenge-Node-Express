const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const actionModelRoute = require('./routes/actionModelRoute');
const projectModelRoute = require('./routes/projectModelRoute');

const server = express();

server.morgan('dev');
server.use(helmet);
server.use(express.json());

server.use('/api/actions', actionModelRoute);
server.use('/api/projects', projectModelRoute);

server.get('/', (req, res) => {
    res.send({api: 'Running....'})
})

const port = 5000;
server.listen(port, () => console.log('API running on port 5000'));
