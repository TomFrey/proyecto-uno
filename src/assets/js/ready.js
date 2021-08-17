"use strict";

function domIsReady(cb) {
  //Wenn der DOM geladen ist, dann die übergebene Funktion cb aufrufen
  if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    cb();
  } else {
    document.addEventListener("DOMContentLoaded", function(){
      cb();
    });
  }
}
