"use strict";

function copy_to_clipboard() {
 var copyText = document.getElementById("myInput");
 copyText.select();
 document.execCommand("Copy");
}
