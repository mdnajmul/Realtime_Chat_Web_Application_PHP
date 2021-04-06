const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
	e.preventDefault(); //preventing form from submitting
}

sendBtn.onclick = ()=>{
    //let's start Ajax
	let xhr = new XMLHttpRequest(); //creating XML object
	xhr.open("POST", "php/insert-chat.php", true); //xhr.open() takes many parameters but we only pass method, url, and async
	xhr.onload = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE){ //show the response in console & this response comes from php file without reloading page
			if(xhr.status === 200){
                inputField.value = ""; // once message inserted into database then leave blank the input field
                scrollToBottom();
			}
		}
	}
	// we have to send the form data through ajax to php
	let formData = new FormData(form); //creating new formData object 
	xhr.send(formData); //sending the form data to php
}


chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}


setInterval(()=>{
	//let's start Ajax
	let xhr = new XMLHttpRequest(); //creating XML object
	xhr.open("POST", "php/get-chat.php", true); //xhr.open() takes many parameters but we only pass method, url, and async
	xhr.onload = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE){ //show the response in console & this response comes from php file without reloading page
			if(xhr.status === 200){
				let data = xhr.response; //xhr.response gives us response of that passed URL
				chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){ // if active class not contains in chatbox the scroll to bottom
                    scrollToBottom();
                }		
			}
		}
	}

    // we have to send the form data through ajax to php
	let formData = new FormData(form); //creating new formData object 
	xhr.send(formData); //sending the form data to php
}, 500); //this function will run frequently after 500ms


function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}