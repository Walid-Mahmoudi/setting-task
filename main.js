


var colorPalet = document.querySelectorAll('.color-palet span');
var colorCircle = document.getElementById("color-profile");
var navClick = document.querySelectorAll("ul li");
var colorIndex;
console.log(navClick);

for(let i=0 ; i< colorPalet.length ; i++){
    colorPalet[i].addEventListener("click", function(e){
        colorIndex= e.target.dataset.color
        colorCircle.style.background=colorIndex;
        console.log(e.target.dataset.color);
    })
}

for (let i=0 ; i< navClick.length ; i++){
    navClick[i].addEventListener("click", function(){
        
    })
}