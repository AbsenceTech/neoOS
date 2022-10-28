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

const apps = {}

function openApp(title, url, width, height) {
	let id = Math.random().toString(36).slice(2);
	apps[id] = new WinBox({
		id: id,
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
			appListName.setAttribute("id", "link" + this.id);
			appListName.setAttribute("class", "nav-link")
			let appList = document.getElementById("appList");
			appList.appendChild(appListName);
		},
		onclose: function () {
			let appListName = document.getElementById("link" + this.id);
			appListName.remove();
			delete apps[this.id]
		},
		onfocus: function () {
			document.getElementById("link" + this.id).classList.add("active")
			this.setBackground("#212529");
		},
		onblur: function () {
			document.getElementById("link" + this.id).classList.remove("active")
			this.setBackground("#121517");
		}
	});
}

function beginLoad() {
	let loadVar = setTimeout(() => {
		document.getElementById("loader").style.display = "none";
		document.getElementById("toLoad").style.display = "block";
		let audio = new Audio('./resources/sounds/freedesktop/service-login.oga');
		audio.play();
	}, 3000);
}
