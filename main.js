(function() {
  var wordArray = ['Poetry', 'By', 'Anandi'];
  var element = document.getElementsByTagName('p')[0];
  var wordIndex = 1;

  var resetAnimation = function() {
    element.classList.remote('flip');
  };

  setInterval(function() {
    switch (wordIndex) {
      case 0:
        element.classList.add('flip');
        element.textContent = wordArray[wordIndex];
        wordIndex = 1;
        setTimeout(resetAnimation, 1000);
        break;

      case 1:
        element.classList.add('flip');
        element.textContent = wordArray[wordIndex];
        wordIndex = 2;
        setTimeout(resetAnimation, 1000);
        break;

      case 2:
        element.classList.add('flip');
        element.textContent = wordArray[wordIndex];
        wordIndex = 0;
        setTimeout(resetAnimation, 1000);
        break;
    }

  }, 2000);


}());
