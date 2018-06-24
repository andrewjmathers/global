"use strict";

console.log("loaded");
	
var wrapper = document.getElementById("Wrapper");


function burgerMenuClicked(){


	wrapper.classList.add("WrapperPerspective");

}

function hireUsHover(){


	$("#buttonAreaOne").animate({

		"width": "100%"

	});

}

function navListClicked(e){

	var ul = document.getElementsByClassName("pageTag");

	var activeContent = document.getElementsByClassName("activeContent");

	var active = document.getElementsByClassName("active");

	var i;

	var n = ul.length;

	for( i=0; i<n; i++ ){

		ul[i].innerHTML = "0"+(i+1);

	}

	function moveToNextPage(target, name){

		target.innerHTML = name;

		active[0].classList.remove("active");

		target.parentNode.classList.add("active");

		$("#mapBG").css({

				"opacity": 0

		});

		$(".activeContent").animate({

			"top":"-30",
			"opacity": 0


		}, 400, completeCallback);

		function completeCallback(){

			activeContent[0].classList.remove("activeContent");

			newElement.classList.add("activeContent");

			$(".activeContent").animate({

				"opacity":1,
				"top": 0

			});

		};

	};

	switch ( e.target.id ){ 

		case "pageOne":

			var newName = "Home";

			var newElement = document.getElementById("content");

			moveToNextPage(e.target, newName);

			break;

		case "pageTwo":

			var newName = "Works";

			var newElement = document.getElementById("content2");

			moveToNextPage(e.target, newName);

			break;

		case "pageThree":

			var newName = "About";

			var newElement = document.getElementById("content3");

			moveToNextPage(e.target, newName);

			break;

		case "pageFour":

			var newName = "Contact";

			var newElement = document.getElementById("content4");

			moveToNextPage(e.target, newName);

			$("#mapBG").css({

				"opacity": 1

			});

			break;

		case "pageFive":

			var newName = "Hire us";

			var newElement = document.getElementById("content5");

			moveToNextPage(e.target, newName);

			break;

	}
}

document.getElementById("burgerMenu").addEventListener("click", burgerMenuClicked);

$("#navMenuUl > li > span").on("click", navListClicked);

$("#bannerButtonInner").on("mouseover", hireUsHover);





