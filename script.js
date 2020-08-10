var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Add event to enter items by input
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var bu = document.createElement("button");
	bu.setAttribute("id",input.value);
	bu.setAttribute("class","deletebutton");
	bu.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(bu);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Add event to remove the selected items
function removeItemAfterClick(clickEvent){
	const isButton = (clickEvent.target.nodeName === "BUTTON");
	if (isButton) {
		clickEvent.target.parentElement.classList.toggle("done");
	}
};

ul.addEventListener("click", removeItemAfterClick);


