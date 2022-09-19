iniciar()

function iniciar() { 
  var boton=document.getElementsById('btnvideo'); 
  boton.addEventListener('click', presionar, false); 
} 
function presionar() { 
  var video=document.getElementById('iframeVideo'); 
  video.play(); 
} 
window.addEventListener('load', iniciar, false); 