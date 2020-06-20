"use strict";

let griffin = document.getElementsByName("gryffindor");
let sly = document.getElementsByName("slytherin");
let huffle = document.getElementsByName("hufflepuff");
let raven = document.getElementsByName("ravenclaw");

let griffindor, slytherin, hufflepuff, ravenclaw;
for (let i = 0; i < griffin.length; i++) {
 if (griffin[i].checked) {
  griffindor += griffin[i].value;
 }
}

for (let i = 0; i < sly.length; i++) {
 if (sly[i].checked) {
  slytherin += sly[i].value;
 }
}

for (let i = 0; i < huffle.length; i++) {
 if (huffle[i].checked) {
  hufflepuff += huffle[i].value;
 }
}

for (let i = 0; i < raven.length; i++) {
 if (raven[i].checked) {
  ravenclaw += raven[i].value;
 }
}

function max(slytherin, griffindor, hufflepuff, ravenclaw) {
 let max = 0;
 if (slytherin > max) max = slytherin;
 if (griffindor > max) max = griffindor;
 if (hufflepuff > max) max = hufflepuff;
 if (ravenclaw > max) max = ravenclaw;
 return max;
}
function findUserDom() {
 let max = max(slytherin, griffindor, hufflepuff, ravenclaw);
 // 결과 html 만들면 연결되도록 쓰기
}
