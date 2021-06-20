'use strict';

const ImageSlider = (function(){
    console.log('inside ImageSlider IIFE');

    var test;

    function init(){
        console.log('init() of ImageSlider called');
        test = 'defaultValue';

        //hier kommt die Funktionalität von ModuleOne...
        return test;
    }

    //public api
    return {
        init: init
    };
})();