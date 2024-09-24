document.addEventListener('scroll', () => {
  const header = document.querySelector('header')

  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
});

let menu = document.querySelector('#icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');

            });
        };

    });
};

function startLoader() {
    const counterElement = document.getElementById('counter');
    let currentValue = 15000000000;
    const maxValue = 15943178897;
  
    function updateCounter() {
      if (currentValue >= maxValue) {
        currentValue = maxValue;
        counterElement.textContent = currentValue.toLocaleString();
        return;
      }
  
      currentValue += Math.floor(Math.random() * 80000000) + 2;
      if (currentValue > maxValue) {
        currentValue = maxValue;
      }
  
      counterElement.textContent = currentValue.toLocaleString();
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }
  
    updateCounter();
  }
  
  startLoader();

  function showdiv() {
    document.getElementById("preload").style.visibility="visible";
  }
  setTimeout("showdiv()", 0);
  
  function hidediv() {
    document.getElementById("preload").style.visibility="hidden";
  }
  setTimeout("hidediv()", 7000);
  
  function hidehead() {
    document.getElementById("header").style.display="none";
  }
  setTimeout("hidehead()", 0);
  
  function showhead() {
    document.getElementById("header").style.display="flex";
  }
  setTimeout("showhead()", 8100);
  
  function hidebtt() {
    document.getElementById("backto").style.display="none";
  }
  setTimeout("hidebtt()", 0);
  
  function showbtt() {
    document.getElementById("backto").style.display="flex";
  }
  setTimeout("showbtt()", 8100);




  




  

