const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0
// VARIABLES RÉCUPÉRANT LES FLÈCHES DU CAROUSSEL //
let arrowLeft = document.querySelector('.arrow_left')
let arrowRight = document.querySelector('.arrow_right')

// VARIABLES RÉCUPÉRANT LA CLASSE DE L'IMAGE DE LA BANNIÈRE //
let imgElement = document.querySelector('.banner-img')

// VARIABLES RÉCUPÉRANT LE TEXTE SUR L'IMAGE ET LA CLASSE DES BULLETS POINTS //
let tLine = document.querySelector('#banner p')
let dots = document.querySelectorAll('.dot')

// AU CLICK SUR LA FLÈCHE DE DROITE ON AVANCE DANS LE TABLEAU //
arrowRight.addEventListener("click", (event) => {
	currentIndex = (currentIndex + 1) % slides.length
	updateSlide()
})

// AU CLICK SUR LA FLÈCHE DE GAUCHE ON RECULE DANS LE TABLEAU //
arrowLeft.addEventListener("click", (event) => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	updateSlide()
})

// FONCTION PERMETTANT DE METTRE À JOUR L'IMAGE ET LES BULLETS POINTS EN FONCTION DE LEURS POSITION DANS L'INDEX DU TABLEAU //
function updateSlide (){
	imgElement.src = "./assets/images/slideshow/" + slides[currentIndex].image
	tLine.innerHTML = slides[currentIndex].tagLine
	// MAJ des bullets points
	dots.forEach(function(dot, index){
		if (index === currentIndex) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	})
}