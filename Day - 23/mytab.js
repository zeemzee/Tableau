var dive = document.getElementById('div1');
var vize = dive.getElementsByTagName('object')[0];
vize.style.width='50%';//'600px';
vize.style.height='300px';
var scre = document.createElement('script');
scre.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
vize.parentNode.insertBefore(scre,vize);