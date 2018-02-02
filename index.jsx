import React from 'react';

import ReactDOM from 'react-dom';

import http from 'http';

const

	Hello = () => (
		<div>Hellor world!</div>
	);

console.log(Hello);

http.createServer((request, response) => {

  response.writeHead(200, {
	  'Content-Type': 'text/plain'
  });

  response.end('Hello World\n');

}).listen(1337);
