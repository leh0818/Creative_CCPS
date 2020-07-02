"use strict";

let griffindor = 0,
 slytherin = 0,
 hufflepuff = 0,
 ravenclaw = 0;
let griffin, sly, huffle, raven;
/*let checkArray = new Array(); //선택 안 한 문항 체크할 배열
for (let i = 1; i < 21; i++) {
 checkArray[i] = false;
}*/

function insertCheckedgriffin(num) {
 for (let i = 0; i < griffin.length; i++) {
  if (griffin[i].checked) {
   griffindor += Number(griffin[i].value);
   //checkArray[num] = true;
  }
 }
}

function insertCheckedsly(num) {
 for (let i = 0; i < sly.length; i++) {
  if (sly[i].checked) {
   slytherin += Number(sly[i].value);
   // checkArray[num] = true;
  }
 }
}

function insertCheckedhuffle(num) {
 for (let i = 0; i < huffle.length; i++) {
  if (huffle[i].checked) {
   hufflepuff += Number(huffle[i].value);
   // checkArray[num] = true;
  }
 }
}

function insertCheckedraven(num) {
 for (let i = 0; i < raven.length; i++) {
  if (raven[i].checked) {
   ravenclaw += Number(raven[i].value);
   // checkArray[num] = true;
  }
 }
}

function max(slytherin, griffindor, hufflepuff, ravenclaw) {
 let max = 0;
 let maxDom;
 if (slytherin > max) {
  max = slytherin;
  maxDom = "slytherin";
 }
 if (griffindor > max) {
  max = griffindor;
  maxDom = "griffindor";
 }
 if (hufflepuff > max) {
  max = hufflepuff;
  maxDom = "hufflepuff";
 }
 if (ravenclaw > max) {
  max = ravenclaw;
  maxDom = "ravenclaw";
 }
 return maxDom;
}

//document.getElementById("resultbtn").onclick = findUserDom();
function findUserDom() {
 griffin = document.getElementsByName("gryffindor1");
 insertCheckedgriffin();
 griffin = document.getElementsByName("gryffindor2");
 insertCheckedgriffin();
 griffin = document.getElementsByName("gryffindor3");
 insertCheckedgriffin();
 griffin = document.getElementsByName("gryffindor4");
 insertCheckedgriffin();
 griffin = document.getElementsByName("gryffindor5");
 insertCheckedgriffin();
 sly = document.getElementsByName("slytherin1");
 insertCheckedsly();
 sly = document.getElementsByName("slytherin2");
 insertCheckedsly();
 sly = document.getElementsByName("slytherin3");
 insertCheckedsly();
 sly = document.getElementsByName("slytherin4");
 insertCheckedsly();
 sly = document.getElementsByName("slytherin5");
 insertCheckedsly();

 huffle = document.getElementsByName("hufflepuff1");
 insertCheckedhuffle();
 huffle = document.getElementsByName("hufflepuff2");
 insertCheckedhuffle();
 huffle = document.getElementsByName("hufflepuff3");
 insertCheckedhuffle();
 huffle = document.getElementsByName("hufflepuff4");
 insertCheckedhuffle();
 huffle = document.getElementsByName("hufflepuff5");
 insertCheckedhuffle();

 raven = document.getElementsByName("ravenclaw1");
 insertCheckedraven();
 raven = document.getElementsByName("ravenclaw2");
 insertCheckedraven();
 raven = document.getElementsByName("ravenclaw3");
 insertCheckedraven();
 raven = document.getElementsByName("ravenclaw4");
 insertCheckedraven();
 raven = document.getElementsByName("ravenclaw5");
 insertCheckedraven();

 let result = max(slytherin, griffindor, hufflepuff, ravenclaw);
 /*let notSelected = new Array();
 let index = 0;
 for (let i = 1; i <= 20; i++) {
  if (checkArray[i] == false) {
   alert(checkArray[i]);
   notSelected[index] = i;
   index++;
   alert(index);
  }
 }*/
 if (result == "griffindor") {
  location.href =
   "result_griffindor.html";
 } else if (result == "slytherin") {
  location.href =
   "result_slytherin.html";
 } else if (result == "hufflepuff") {
  location.href =
   "result_hufflepuff.html";
 } else if (result == "ravenclaw") {
  location.href =
   "result_ravenclaw.html";
 }
}

document.getElementById("nextbutton").onclick = function () {
 findUserDom();
};
