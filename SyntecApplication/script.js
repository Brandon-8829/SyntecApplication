const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

async function getAPI(){
    const response = await fetch("https://emplistapi-258220.appspot.com");
    var data = await response.json();
    console.log(data);
    addElement(data);
 }

function addElement(data){

	data.forEach(employee => {
		const newDiv = document.createElement("div");
		newDiv.className = "list-element";
		const firstname = document.createTextNode(employee.name.first+' '+employee.name.last+' ');
		const jobtitle = document.createTextNode(employee.jobTitle);
		// var image = document.createElement('img');
		// image.className = "list-image";
		

		if(employee.photoURL === null){
			
		}else{
			var image = document.createElement('img');
			image.className = "list-image";
			image.src = employee.photoURL;
			newDiv.appendChild(image);
		}

		newDiv.appendChild(firstname);
		newDiv.appendChild(jobtitle);
		

		const currentDiv = document.getElementById("container");
		document.body.insertBefore(newDiv, currentDiv);
	});
	

}

function newEmployee(){
	var firstname = document.getElementById("firstname").value;
	if(firstname === null){
		window.alert("Invalid Name");
		return;
	}
	var lastname = document.getElementById("lastname").value;
	if(lastname === null){
		window.alert("Invalid Name");
		return;
	}
	var jt = document.getElementById("jobTitles");
	var jobtitle = jt.value;
	if(jobtitle === null){
		window.alert("invalid job title");
		return;
	}

	const newDiv = document.createElement("div");
	newDiv.className = "list-element";
	const fname = document.createTextNode(firstname+' ');
	const lname = document.createTextNode(lastname+' ');
	const jtitle = document.createTextNode(jobtitle+' ');

	newDiv.appendChild(fname);
	newDiv.appendChild(lname);
	newDiv.appendChild(jtitle);

	const currentDiv = document.getElementById("container");
	document.body.insertBefore(newDiv, currentDiv);

	window.alert("Employee Saved");

}



 window.onload = getAPI;