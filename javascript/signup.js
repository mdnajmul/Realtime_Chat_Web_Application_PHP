const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
	e.preventDefault(); //preventing form from submitting
}

continueBtn.onclick = ()=>{
	//let's start Ajax
	let xhr = new XMLHttpRequest(); //creating XML object
	xhr.open("POST", "php/signup.php", true); //xhr.open() takes many parameters but we only pass method, url, and async
	xhr.onload = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				let data = xhr.response; //xhr.response gives us response of that passed URL

				if(data == "success"){
					location.href = "users.php";
				}else{
					errorText.textContent = data;
					errorText.style.display = "block";
				}
				console.log(data); //show the response in console & this response comes from php file without reloading page

			}
		}
	}
	// we have to send the form data through ajax to php
	let formData = new FormData(form); //creating new formData object 
	xhr.send(formData); //sending the form data to php
}