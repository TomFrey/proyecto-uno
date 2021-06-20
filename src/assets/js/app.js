"use strict";

const App = (function (Navigation) {

  /**** wird vor dem DOM ready ausgeführt ****/

  /**** wird nach dem DOM ready ausgeführt ****/
  function init(){
    console.log('init() of App called');
    Navigation.init();


  };

  //public api
  return{
    init: init
  }

})(Navigation);

//wenn der DOM vollständig geladen ist init aufrufen
domIsReady(App.init);
