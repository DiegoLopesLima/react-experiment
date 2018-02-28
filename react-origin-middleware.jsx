import React from 'react';

import ReactDOMServer from 'react-dom/server';

export default () => {

	return (request, response, next) => {

		response.sendTemplate = element => response.send('<!DOCTYPE html>' + ReactDOMServer.renderToString(element));

		next();

	};

};
