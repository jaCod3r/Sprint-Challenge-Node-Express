const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const actionModelRoute = require('./routes/actionModelRoute');
const projectModelRoute = require('./routes/projectModelRoute');

const server = express();

const cors = require('cors');

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/actions/', actionModelRoute);
server.use('/api/projects/', projectModelRoute);

server.get('/', (req, res) => {
  res.send({ api: 'Running....' });
});

const port = 5000;
server.listen(port, () => console.log('API running on port 5000'));
