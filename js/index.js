
function openTab(tabName) {

	document.querySelector('#' + tabName).classList.remove("close");
	document.querySelector('#' + tabName).classList.add("open");

	document.querySelector('#' + tabName).querySelector('.content').classList.remove("hide");
	document.querySelector('#' + tabName).querySelector('.content').classList.add("show");
}
//document.getElementById("defaultTab").click();

function closeTab(tabName) {
	document.querySelector('#' + tabName).classList.remove("open");
	document.querySelector('#' + tabName).classList.add("close");

	document.querySelector('#' + tabName).querySelector('.content').classList.remove("show");
	document.querySelector('#' + tabName).querySelector('.content').classList.add("hide");
}