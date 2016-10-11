(function(){

  'use strict';


  var form = document.querySelectorAll('.c-form');

  if (form.length) {

    let formControls = document.querySelectorAll('.c-form__control');
    let formInputs = document.querySelectorAll('.c-form input, .c-form textarea');
    let formSelects = document.querySelectorAll('.c-form input[type="checkbox"], .c-form input[type="radio"], .c-form select');

    // set class state-required for all the required form controls.
    for (let i = 0; i < formControls.length; i++) {
      if (formControls[i].querySelectorAll('[required]').length) {
        formControls[i].classList.add('state-required');
      }
    }

    // set attribute data-feedback-activated on input after an keydown event.
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('keydown', function () {
        this.setAttribute('data-feedback-activated', true);
      });
    }

    // set attribute data-feedback-activated on selectables after a click event.
    for (let i = 0; i < formSelects.length; i++) {
      formSelects[i].addEventListener('click', function () {
        this.setAttribute('data-feedback-activated', true);
      });
    }

  }


})();
