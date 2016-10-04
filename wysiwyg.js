

var people = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
   },
   {
	  title: "Samurai 2",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	 {
	  title: "Samurai 3",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	 {
	  title: "Samurai 4",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	 {
	  title: "Samurai 5",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {	
	    birth: 1747,
	    death: 1797
	  }
	 }
	];

	var userInput = document.getElementById("input");
	var outputEl = document.getElementById("output");
	var peopleContainer = document.getElementsByClassName("people__container");
	var userInputOutput = document.getElementById("userOutput");
	var counter = 0;	

	function enterKeyPressed(keypress){
		if (keypress.which === 13) {
			userInput.value = "";
		}
	}
	document.addEventListener("keypress", enterKeyPressed);
 
	
	for (; counter < 5 ; counter++) {
		var peopleObjects = `<header>${people[counter].name}:`;
			peopleObjects += `${people[counter].title}</header>`;
			peopleObjects += `<img src="${people[counter].image}">`;
			peopleObjects += `<footer>lifespan: ${people[counter].lifespan.birth} to `;
			peopleObjects += `${people[counter].lifespan.death}</footer>`;
			peopleObjects += `<section>${people[counter].bio}</section>`;
  			outputEl.innerHTML += `<div class="people__container" id="people--${counter}">${peopleObjects}</div>`;
	};

	var bioSection;
	for (var i = 0; i < peopleContainer.length; i++) {
	    peopleContainer[i].addEventListener("click", function (event) {
	    bioSection = this.childNodes[3];
	    bioSection.parentElement.classList.toggle("border");
    
	    userInput.style.background = "lightgreen";
        if(userInput.value === "enter text here"){
          userInput.value = "";
       	} else if (userInput.value === ""){
       		userInput.style.background = "white";
       		userInput.value = "enter text here";
       	};

       	userInput.focus();
       	userInput.addEventListener("keyup", function (event){
       		event.preventDefault();
       		bioSection.innerHTML = userInput.value;
       	});
      }); 
	} 

	

    

	





































	