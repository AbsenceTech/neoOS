function startTime() {
	const today = new Date();
	let d = today.getDate();
	let mo = today.getMonth();
	let y = today.getFullYear();
	let h = today.getHours();
	let m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('timeDisplay').innerHTML = d + "/" + mo + "/" + y + " " + h + ":" + m;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i;
}

function openApp(title, url, width, height) {
	let Window = new WinBox({
		title: title,
		url: url,
		width: width,
		height: height,
		x: "center",
		y: "center",
		top: 55,
		right: 0,
		bottom: 0,
		left: 0,
		oncreate: function () {
			let appListName = document.createElement("li");
			let node = document.createTextNode(title);
			appListName.appendChild(node);
			appListName.setAttribute("id", this.id);
			appListName.setAttribute("class", "nav-link")
			let appList = document.getElementById("appList");
			appList.appendChild(appListName);
		},
		onclose: function () {
			let appListName = document.getElementById(this.id);
			appListName.remove();
		},
		onfocus: function () {
			this.setBackground("#212529");
		},
		onblur: function () {
			this.setBackground("#121517");
		}
	});
}

function beginLoad() {
	let loadVar = setTimeout(() => {
		document.getElementById("loader").style.display = "none";
		document.getElementById("navBar").style.display = "block";
	}, 3000);
}
