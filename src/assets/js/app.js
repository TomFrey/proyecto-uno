"use strict";

const App = (function (Navigation, ImageSlider, GetData) {

  /**** wird vor dem DOM ready ausgeführt ****/

  /**** wird nach dem DOM ready ausgeführt ****/
  function init(){
    console.log('init() of App called');
   
    GetData.loadAndRenderData()
      .then(() => {
        
          GetData.loadAndRenderPictures()
          .then(() => {
            Navigation.init();
            ImageSlider.init();
          })
          .catch((error) => {
            console.log(error);
          });
          
      })
      .catch((error) => {
        console.log(error);
      });

   


  };

  //public api
  return{
    init: init
  }

})(Navigation, ImageSlider, GetData);

//wenn der DOM vollständig geladen ist init aufrufen
domIsReady(App.init);
