
var images = [{
  ruta: "assets/img/productos/img-1.jpg",
  alt: "img01",
  caption: "img01"
}, {
  ruta: "assets/img/productos/img-2.jpg",
  alt: "img02",
  caption: "img02"
},
{
  ruta: "assets/img/productos/img-3.jpg",
  alt: "img03",
  caption: "img03"
},
{
  ruta: "assets/img/productos/img-4.jpg",
  alt: "img04",
  caption: "img04"
},
{
  ruta: "assets/img/productos/img-5.jpg",
  alt: "img05",
  caption: "img05"
},
{
  ruta: "assets/img/productos/img-6.jpg",
  alt: "img06",
  caption: "img06"
},
{
  ruta: "assets/img/productos/img-7.jpg",
  alt: "img07",
  caption: "img07"
},
{
  ruta: "assets/img/productos/img-8.jpg",
  alt: "img08",
  caption: "img08"
},
{
  ruta: "assets/img/productos/img-9.jpg",
  alt: "img09",
  caption: "img09"
},

{
  ruta: "assets/img/productos/img-10.jpg",
  alt: "img10",
  caption: "img10"
},
{
  ruta: "assets/img/productos/img-11.jpg",
  alt: "img11",
  caption: "img11"
},
{
  ruta: "assets/img/productos/img-12.jpg",
  alt: "img12",
  caption: "img12"
}
];

var ruta = images.map(function (e) {
  return e.ruta;
});

var alt = images.map(function (e) {
  return e.alt;
});

var caption = images.map(function (e) {
  return e.caption;
});

for (var i = 0; i < images.length; i++) {
  imprimir(ruta[i]);
}

function imprimir(src) {
  var contenedorMayor= document.getElementById("divMayor");
  var fotoProducto=document.createElement('img');
  var divProductos=document.createElement('div');
  var span=document.createElement('span');
  divProductos.setAttribute('class','div-imagen');
  fotoProducto.setAttribute('src', src);

  span.innerText="nombre de proyecto";
  divProductos.appendChild(fotoProducto);
 divProductos.appendChild(span);
  contenedorMayor.appendChild(divProductos);
}


/*
for (var i=1; i<=12; i++) {
  var fotoProducto=document.createElement('img');
  var divProductos=document.createElement('div');
  var span=document.createElement('span');
  divProductos.setAttribute('class','div-imagen');
  fotoProducto.setAttribute('src','assets/img/productos/img-'+ i +'.jpg');

  span.innerText="nombre de proyecto";
  divProductos.appendChild(fotoProducto);
 divProductos.appendChild(span);
  contenedorMayor.appendChild(divProductos);
}
*/
var modal = document.getElementById('myModal');
var caption = document.getElementById('caption');
var modalImg = document.getElementById("img01");

document.getElementById("divMayor").addEventListener("click",function(e){
  modal.style.display = "block";
  modalImg.src = e.target.src;
});

document.getElementsByClassName("close")[0].addEventListener("click", function(){
      modal.style.display = "none";
});
