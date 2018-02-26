import React from 'react';

import ReactDOMServer from 'react-dom/server';

import express from 'express';

import compression from 'compression';

import template from './templates/blank/blank.template.jsx';

const

	application = express(),

	port = 3000;

// const middleware = (request, response, next) = next();

// application.use(middleware);

application.use(express.static('./public'));

application.use(compression());

application.get('/', (request, response) => {

	const

		handlerClick = event => console.log(event.type),

		content = <div onClick={handlerClick}>Hello world!</div>,

		html = template({
			title: 'Title',
			content: content
		});

	response.send('<!DOCTYPE html>' + ReactDOMServer.renderToString(html));

});

application.listen(port, () => console.log(`Listening on port ${port}.`));
