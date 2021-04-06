const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = ()=>{
	searchBar.classList.toggle("active");
	searchBar.focus();
	searchBtn.classList.toggle("active");
	searchBar.value = "";
}

searchBar.onkeyup = ()=>{
	let searchTerm = searchBar.value;
	if(searchTerm != ""){
		searchBar.classList.add("active");
	}else{
		searchBar.classList.remove("active");
	}
	//let's start Ajax
	let xhr = new XMLHttpRequest(); //creating XML object
	xhr.open("POST", "php/search.php", true); //xhr.open() takes many parameters but we only pass method, url, and async
	xhr.onload = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE){ //show the response in console & this response comes from php file without reloading page
			if(xhr.status === 200){
				let data = xhr.response; //xhr.response gives us response of that passed URL
				usersList.innerHTML = data;
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("searchTerm=" + searchTerm); //sending user search term to php file with ajax
}

setInterval(()=>{
	//let's start Ajax
	let xhr = new XMLHttpRequest(); //creating XML object
	xhr.open("GET", "php/users.php", true); //xhr.open() takes many parameters but we only pass method, url, and async
	xhr.onload = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE){ //show the response in console & this response comes from php file without reloading page
			if(xhr.status === 200){
				let data = xhr.response; //xhr.response gives us response of that passed URL
				if(!searchBar.classList.contains("active")){ //if active not contains in search bar then add this data
					usersList.innerHTML = data;
				}			
			}
		}
	}
	xhr.send();
}, 500); //this function will run frequently after 500ms