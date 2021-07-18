"use strict";

const App = (function (Navigation, ImageSlider, GetData, Render) {

  /**** wird vor dem DOM ready ausgeführt ****/

  /**** wird nach dem DOM ready ausgeführt ****/
  function init(){
    console.log('init() of App called');

    Navigation.init();
   
    GetData.loadAndRenderData()
      .then(() => {
        return GetData.loadAndRenderPictures()
      })
      .then((pictures) => {
        Render.createPicturesForImageSlider(pictures)
      })
      .then(() => {
        ImageSlider.init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //public api
  return{
    init: init
  }

})(Navigation, ImageSlider, GetData, Render);

//wenn der DOM vollständig geladen ist init aufrufen
domIsReady(App.init);
