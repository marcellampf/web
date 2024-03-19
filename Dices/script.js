document.getElementById('rollButton').addEventListener('click', function() {
    var sides = document.getElementById('diceSides').value;
    var diceGifContainer = document.getElementById('diceGif');
    var gifHTML = '';
  
    switch(sides) {
      case '4':
        gifHTML = '<iframe src="https://giphy.com/embed/HRUboYorHt6sloh8cv" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case '6':
        gifHTML = '<iframe src="https://giphy.com/embed/1tLvBEzx2k16wMBL8H" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case '8':
        gifHTML = '<iframe src="https://giphy.com/embed/VGoZVlR9naOZCiRLSy" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case '10':
        gifHTML = '<iframe src="https://giphy.com/embed/5KX9jiNXkb3xK" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case '12':
        gifHTML = '<iframe src="https://giphy.com/embed/Z2gblz76EE2J5zVh0s" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case '20':
        gifHTML = '<iframe src="https://giphy.com/embed/sgePCvSR0gQRjgvCcc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
    }
  
    diceGifContainer.innerHTML = gifHTML; 
    diceGifContainer.style.opacity = 1; 
  
    setTimeout(function() {
      var result = Math.floor(Math.random() * sides) + 1;
      document.getElementById('resultDisplay').textContent = 'Result: ' + result;
      diceGifContainer.style.opacity = 0; 
    }, 2100);
  });
  