export default ({ language = 'pt-BR', charset = 'UTF-8', title, body }) => {

	return `
		<!DOCTYPE html>
		<html lang="${language}">
			<head>
				<meta charset="${charset}" />

				<title>${title}</title>
			</head>

			<body>${body}</body>
		</html>
	`;

};
