window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50 ) {
      navbar.classList.add('bg-nav-scrolled');
    } else {
      navbar.classList.remove('bg-nav-scrolled');
    }
    
});

function activeInScroll() {
  document.querySelectorAll('.transitionx').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.getAttribute('data-src');
    };
  })
}


window.addEventListener('scroll', activeInScroll);

function activeInScrollDiv() {
  document.querySelectorAll('.div-transitionx').forEach((div, index) => {
    if(div.getBoundingClientRect().top < window.innerHeight) {
      div.classList.add('finish');
    };
  })
}


window.addEventListener('scroll', activeInScrollDiv);