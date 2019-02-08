document.addEventListener('click', function(e) {
  if(e.target.classList.contains('categories__map')) {
    document.querySelector('.iframe-map').classList.add('show');
  }
  else {
    document.querySelector('.iframe-map').classList.remove('show');
  }
})