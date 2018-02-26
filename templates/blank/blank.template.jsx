import React from 'react';

export default ({ language = 'pt-BR', charset = 'UTF-8', title, body }) => {

	return (
		<html lang={language}>
			<head>
				<meta charset={charset} />

				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

				<title>{title}</title>
			</head>

			<body>
				<div id="root">{content}</div>
			</body>
		</html>
	);

};
