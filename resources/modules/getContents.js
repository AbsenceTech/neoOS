function getContents(url) {
	let request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			let type = request.getResponseHeader('Content-Type');
			if (type.indexOf("text") !== 1) {
				return request.responseText;
			};
		};
	};
};
