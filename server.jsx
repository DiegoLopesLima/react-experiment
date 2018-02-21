import express from 'express';

import React from 'react';

import ReactDOMServer from 'react-dom/server';

let element = <div>Hello world!</div>;

const

	application = express(),

	port = 3000;

application.get('/', (request, response) => response.send(ReactDOMServer.renderToString(element)));

application.listen(port, () => console.log(`Listening on port ${port}.`));
