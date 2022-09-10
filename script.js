var reg= /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i
let inpElem = document.getElementById('color_input');
let divElem = document.getElementById('color_preview');
inpElem.addEventListener('keyup' , function(){
 let res = inpElem.value;
 if(reg.exec("#" +  res))
divElem.style.backgroundColor = "#" +  res;
else
divElem.style.backgroundColor = "#" + "111";
})