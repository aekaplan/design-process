$(document).ready(function($) {

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });

  $(document).scroll( function() {
    updateScrollerListeners();
  });

});

function getWindowPosition() {
  return $(window).scrollTop() + $(window).height();
}

function scrollListeners() {
  return {
    '#discovery' : ['.animate', 'animated fadeInUp'],
    '#wireframing' : ['.animate', 'animated flipInX'],
    '#prototyping' : ['.animate', 'animated fadeInLeft'],
    '#user-testing' : ['.animate', 'animated fadeInRight'],
    '#visual-design' : ['.animate', 'animated fadeInLeft'],
    '#implementation' : ['.animate', 'animated fadeInUp']
  };
}

function animationThreshhold(element, percent) {
  return element.offset().top + (element.height() * percent);
}

function updateScrollerListeners() {
  var listeners = Object.keys(scrollListeners());

  for (var i = 0; i < listeners.length; i++) {
    var key = listeners[i];
    var parentElement = $(key);
    var scrollListener = scrollListeners()[key];
    var animatedElementSelector = scrollListener[0];
    var action = scrollListener[1];

    if (getWindowPosition() > animationThreshhold(parentElement, 0.5)) {
      parentElement.find(animatedElementSelector).addClass(action);
    }
  }
}

// function scrollListenersDos() {
//   return {
//     "listeners": [
//       { 'listener':'#discovery',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}},
//
//       {'listener':'#wireframing',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}},
//
//       {'listener':'#prototyping',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}},
//
//       {'listener':'#user-testing',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}},
//
//       {'listener':'#visual-design',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}},
//
//       {'listener':'#implementation',
//         'options': {'animatedElement':'.animate', 'animation':'animated fadeInUp'}}
//     ]
//   }
// }
