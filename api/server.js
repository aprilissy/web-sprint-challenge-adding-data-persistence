const express = require('express');
const server = express();

const Projects = require('./project/router');
const Resources = require('./resource/router');
const Tasks = require('./task/router');

server.use(express.json());
server.use('api/project', Projects);
server.use('api/resource', Resources);
server.use('api/task', Tasks);

module.exports = server;