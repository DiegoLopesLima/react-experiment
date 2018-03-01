import React from 'react';

import express from 'express';

import BlankTemplate from '../templates/blank/blank.template.jsx';

import HomeView from './home.view.jsx';

var router = express.Router();

router.route('/')

	.get((request, response) => {

		const

			templateProperties = {
				view: <HomeView />,
				scripts: [
					{
						src: '/assets/client.bundler.js'
					}
				],
				title: 'Home'
			};

		response.sendTemplate(<BlankTemplate {...templateProperties} />);

	});

export default router;
