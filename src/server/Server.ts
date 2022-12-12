import 'dotenv/config';
import express from 'express';

const server = express();

server.use(express.static('public'));

server.use(express.json());

export { server };
