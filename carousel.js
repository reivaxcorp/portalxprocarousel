angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var images = [
    'https://lh3.googleusercontent.com/-a8JgqKYHKcg/V37gRP-CbgI/AAAAAAAABZ0/c5HuSweKG9EZxeCAeo3E5lUiZrFSN3fLwCCo/s600/2.jpg',
    'https://lh3.googleusercontent.com/-oe0-vZlWy5U/V37gRMuh7wI/AAAAAAAABZw/hrbASBc9urEa22fHwkLsGd5ydRNlhF6dACCo/s600/1.jpg',
    'https://lh3.googleusercontent.com/-sAnTwVXe-wY/V37gRJ3aX2I/AAAAAAAABZs/rKbcfVolxG4qdncU79BwMqgayhYTpLemwCCo/s600/3.jpg',
    'https://lh3.googleusercontent.com/-WUBI0oipeuQ/V37gRdiA_AI/AAAAAAAABZ4/mkcBgZAt9YcIGLZ1zt4Qz3oeUECJ38zAACCo/s600/4.jpg'
    ];
  var currIndex = 0;
  
  var dirPortalUrl = [
    'http://www.portalxpro.com/2016/06/dragon-ball-super-ultimo-capitulo.html',
    'http://www.portalxpro.com/2016/06/league-of-angels-2.html',
    'http://www.portalxpro.com/2016/07/outcast.html',
    'http://www.portalxpro.com/2016/06/wario-world-emulador-dolphin-30.html'
    ]; 
  
  
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: images[currIndex],
      text: ['DragonBallSuper','League of Angels 2','Outcast serie','Wario World + Emulador'][slides.length % 4],
      url : dirPortalUrl[currIndex],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});