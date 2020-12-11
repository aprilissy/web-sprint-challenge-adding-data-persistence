const express = require('express');
const server = express();

const Projects = require('./project/router');
const Resources = require('./resource/router');
const Tasks = require('./task/router');

server.use(express.json());
server.use('/api/projects', Projects);
server.use('/api/resources', Resources);
server.use('/api/tasks', Tasks);

module.exports = server;