import express from 'express';

import React from 'react';

import ReactDOMServer from 'react-dom/server';

import template from './templates/blank/blank.template.jsx';

const

	application = express(),

	port = 3000;

// const middleware = (request, response, next) = next();

// application.use(middleware);

application.use(express.static('./public'));

let element = <div>Hello world!</div>;

application.get('/', (request, response) => {

	response.send(
		template({
			title: 'Hello World',
			body: ReactDOMServer.renderToString(element)
		})
	);

});

application.listen(port, () => console.log(`Listening on port ${port}.`));
