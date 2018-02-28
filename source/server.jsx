import React from 'react';

import express from 'express';

import compression from 'compression';

import homeRouter from './home/home.router.jsx';

import reactOriginMiddleware from '../react-origin-middleware.jsx';

const

	application = express(),

	port = 3000;

application.use(express.static('./distribution/public'));

application.use(reactOriginMiddleware());

application.use('/', homeRouter);

application.use(compression());

application.listen(port, () => console.log(`Listening on port ${port}.`));
