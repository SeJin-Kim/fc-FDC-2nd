/*! toggleGrid.js © yamoo9.net, 2016 */
(function(global){
  'use strict';
  var containers = document.querySelectorAll('.container');
  document.onkeydown = function(event) {
    if(event.keyCode === 71 && event.shiftKey) {
      Array.prototype.forEach.call(containers, function(container) {
        container.classList.toggle('show-grid');
      });
    }
  };
})(this);