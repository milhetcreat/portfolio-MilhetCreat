


//code de la gallery

//sélectionner tous les éléments requis
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
window.onload = ()=>{ //après le chargement de la fenêtre
  filterItem.onclick = (selectedItem)=>{ //si l'utilisateur clique sur filterItem div
    if(selectedItem.target.classList.contains("item")){ //si l'élément sélectionné par l'utilisateur a la classe .item
      filterItem.querySelector(".active").classList.remove("active"); //supprimer la classe active qui est dans le premier élément
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); //obtenir la valeur du nom de données de l'élément sélectionné par l'utilisateur et le stocker dans une variable filtername
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //obtenir la valeur du nom de données de l'image
        //si la valeur du nom de données de l'élément sélectionné par l'utilisateur est égale à la valeur du nom de données des images
        //ou la valeur du nom de données de l'élément sélectionné par l'utilisateur est égale à "tout"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //supprimez d'abord la classe qui masque l'image
          image.classList.add("show"); //ajouter une classe pour la montrer dans l'image
        }
        else{
          image.classList.add("hide"); //ajouter une classe qui masque dans l'image
          image.classList.remove("show"); //supprimer la classe d'affichage de l'image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //ajouter l'attribut onclick dans toutes les images disponibles
  }
}
//fonction de prévisualisation d'image plein écran
//sélectionner tous les éléments requis
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
function preview(element){
  //une fois que l'utilisateur a cliqué sur une image, supprimez la barre de défilement du corps, de sorte que l'utilisateur ne peut pas faire défiler vers le haut ou vers le bas
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //obtenir que l'utilisateur clique sur le lien source de l'image et le stocke dans une variable
  let selectedImgCategory = element.getAttribute("data-name"); //obtenir la valeur du nom de données de l'image sur laquelle l'utilisateur a cliqué
  previewImg.src = selectedPrevImg; //passage de la source d'image sur laquelle l'utilisateur a cliqué dans la source d'image d'aperçu
  categoryName.textContent = selectedImgCategory; //passage de la valeur du nom de données cliqué par l'utilisateur dans le nom de la catégorie
  previewBox.classList.add("show"); //afficher la boîte d'image d'aperçu
  shadow.classList.add("show"); //afficher le fond gris clair
  closeIcon.onclick = ()=>{ //si l'utilisateur clique sur l'icône de fermeture de la boîte de prévisualisation
    previewBox.classList.remove("show"); //masquer la boîte de prévisualisation
    shadow.classList.remove("show"); //masquer le fond gris clair
    document.querySelector("body").style.overflow = "auto"; //afficher la barre de défilement sur le body
  }
}


// smooth scroll flèche
const btn = document.getElementById('back-to-top');

btn.addEventListener('click', function(event) {
  event.preventDefault();  
  let destination = btn.getAttribute('href'); 
  document.querySelector(destination).scrollIntoView({
  behavior: 'smooth'
  });    
  });



// smooth scroll menu
const ancres = document.getElementsByClassName('ancre');
for (let i = 0; i < ancres.length; i++){
ancres[i].addEventListener('click', function(event) {
    event.preventDefault(); 
    let destination = ancres[i].getAttribute('href');
    document.querySelector(destination).scrollIntoView({
    behavior: 'smooth'
    });   
  });
};



const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})





// MENU BURGER

const burger = document.getElementById('burger-menu');
const menu = document.getElementById('menu-principal');
const bars = document.getElementById('bars');

burger.addEventListener('click', function(event) {
  if (menu.style.display === "flex" ){
    menu.style.display = "none";
    bars.classList.remove("fa-solid");
    bars.classList.remove("fa-angle-up");
    bars.classList.add("fa-solid");
    bars.classList.add("fa-bars");
      
  }else {
    menu.style.display = "flex";
    bars.classList.remove("fa-solid");
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-solid");
    bars.classList.add("fa-angle-up");
  }
  });

window.addEventListener('resize', function (e) {
  console.log('Redimensionnement de la fenêtre');
  let largeur = window.innerWidth;
  if (largeur > "992" ){
      menu.style.display = "flex";
      bars.classList.remove("open")
  }else {
      menu.style.display = "none";
  }
  });