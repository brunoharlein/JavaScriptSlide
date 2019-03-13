// var
var test = 0;
var picts = document.getElementsByClassName("pict");
console.log(picts);
// Functions

// code logic
// boucle pour supprimer toutes les images
for (var i = 0; i < picts.length; i++) {
  picts[i].style.display = "none";
}
//affichage de la premiere image
picts[test].style.display = "block";

// insertion des delais
setInterval(function() {
  // image display none
  picts[test].style.display = "none";
  if (test < picts.length -1) {
      test++;
  }
  else {
    test = 0;
  }
  picts[test].style.display = "block";
}, 2000);
