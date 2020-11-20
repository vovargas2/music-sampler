let audio = document.querySelectorAll('.audio');
let covers = document.querySelectorAll('.covers');

function hideAll () {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();


covers.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    switch(e.target.getAttribute('id')) {
      case 'days':
      document.querySelector('#wire')
      .style.display = 'block';
      break;

      case 'tell':
      document.querySelector('#right')
      .style.display = 'block';
      break;

      case 'women1':
      document.querySelector('#steps')
      .style.display = 'block';
      break;

      case 'women2':
      document.querySelector('#alone')
      .style.display = 'block';


    }
    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


  }

});
