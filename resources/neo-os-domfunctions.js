function createElement(tag, class, childId, parentId, content) {
	let element = document.createElement(tag);
	element.innerHTML = content;
	element.setAttribute("class", class);
	element.setAttribute("id", childId);
	let parentElement = document.getElementById(parentId);
	parentElement.appendChild(element);
};

function delElement(id) {
	document.getElementById(id).remove();
};

function setAttribute(id, attribute, value) {
	let element = document.getElementById(id);
	element.setAttribute(attribute, value);
};

function setStyle(id, property, value) {
	let element = document.getElementById(id);
	element.style.property = value;
};
