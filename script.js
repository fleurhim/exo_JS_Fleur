// Fonctionnalité 1 et 1.bis

var clickerFooter = document.getElementsByTagName("footer")[0];

var count = 1

function clickOnFooter () {
	console.log("clic  numéro" + " " + count )
	count++
};

clickerFooter.addEventListener("click", clickOnFooter);

// Fonctionnalité 2

var clickerNavToggler = document.getElementsByClassName("navbar-toggler")[0];
var navbarHeader = document.getElementById("navbarHeader");

function toggleCollapse () {
	navbarHeader.classList.toggle("collapse")
}

clickerNavToggler.addEventListener("click", toggleCollapse);

// Fonctionnalité 3

var buttonEdit1 = document.querySelectorAll("button.btn-outline-secondary")[0];
var textCard1 = document.getElementsByClassName("card-text")[0];

function textColorRed (){
	textCard1.style.color = "red";
}

buttonEdit1.addEventListener("click", textColorRed);

// Fonctionnalité 4

var buttonEdit2 = document.querySelectorAll("button.btn-outline-secondary")[1];
var textCard2 = document.getElementsByClassName("card-text")[1];

function textColorGreen () {
	if (textCard2.style.color === "green") {
		textCard2.style.color = 'black';
	} else {
		textCard2.style.color = "green";
	}
}

buttonEdit2.addEventListener("click", textColorGreen);

// Fonctionnalité 5

var header = document.getElementsByTagName("header")[0]
var cssLink = document.getElementsByTagName('link')[0]

function disableCSS () {
	if (cssLink.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
		cssLink.href = "";
	} else {
		cssLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
	}
}

header.addEventListener("click", disableCSS)


// Fonctionnalité 6

var viewCards = document.querySelectorAll('.btn-success')
var cardText = document.querySelectorAll('.card-text')
var image = document.querySelectorAll('.card-img-top')

for (let i = 0; i < viewCards.length; i++ ) {
	viewCards[i].addEventListener("mouseover", function () {
	if (cardText[i].style.display === "none") {
    	cardText[i].style.display = "block";
    	image[i].style.width = '100%'
  	} else {
  		image[i].style.width = "20%"
    	cardText[i].style.display = "none";
	}
	})
}

// Fonctionnalité 7

let buttonNext = document.getElementsByClassName("btn-secondary")[0]
let listCards = document.getElementsByClassName('row')[1]

function cardNext () {
 listCards.insertBefore(listCards.lastChild, listCards.firstChild)
}

buttonNext.addEventListener('click', cardNext)

// Fonctionnalité 8

let buttonPrevious = document.getElementsByClassName("btn-primary")[0]
let allCards = document.getElementsByClassName('row')[1]

function cardPrevious (e) {
	e.preventDefault();
	allCards.insertBefore(allCards.firstChild, allCards.lastChild.nextSibling)
}

buttonPrevious.addEventListener('click', cardPrevious)

// Fonctionnalité 9

let logo = document.getElementsByClassName('navbar-brand')[0].childNodes[3]
let allContent = document.body
console.log(logo)

function KeyPress (e) {
	let x = e.keyCode;
	if (x == 65) {
		allContent.removeAttribute("class");
		allContent.classList.add('col-4')
	}
}
logo.addEventListener("keypress", KeyPress)