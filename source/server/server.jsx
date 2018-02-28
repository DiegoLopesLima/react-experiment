import React from 'react';

import ReactDOMServer from 'react-dom/server';

import express from 'express';

import compression from 'compression';

import HomeView from './home.jsx'

const template = ({ language = 'pt-BR', charset = 'UTF-8', title, content, scripts = [] }) => {

	return (
		<html lang={language}>
			<head>
				<meta charset={charset} />

				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

				<title>{title}</title>
			</head>

			<body>
				<div id="root">{content}</div>

				{scripts.map(attributes => <script {...attributes}></script>)}
			</body>
		</html>
	);

};

const

	application = express(),

	port = 3000;

application.use(express.static('./distribution/public'));

application.use(compression());

application.get('/', (request, response) => {

	const
		html = template({
			title: 'Title',
			content: <HomeView />,
			scripts: [
				{
					src: '/assets/client.bundler.js'
				}
			]
		});

	response.send('<!DOCTYPE html>' + ReactDOMServer.renderToString(html));

});

application.listen(port, () => console.log(`Listening on port ${port}.`));
