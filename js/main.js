let menubar = document.getElementById('menu-icon'),
  navbar = document.querySelector('.navbar'),
  header = document.querySelector('header');

menubar.onclick = () => {
  //navbar.classList.toggle('active')
  if (menubar.classList.contains('fa-bars')) {
    menubar.classList.replace('fa-bars', 'fa-times')
    navbar.classList.add('active')
  } else {
    menubar.classList.replace('fa-times', 'fa-bars')
    navbar.classList.remove('active')

  }
}
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

//dark mode theam
const btn = document.getElementById('darkmode');
const theam = document.querySelector('body');
let darkmode = localStorage.getItem('darkmode');

let enabledarkmode = () => {
  theam.classList.add('active');
  btn.classList.replace('fa-moon', 'fa-sun')
  localStorage.setItem('darkmode', 'enable');
}

let disabledarkmode = () => {
  theam.classList.remove('active');
  btn.classList.replace('fa-sun', 'fa-moon')
  localStorage.setItem('darkmode', 'disable');
}

if (darkmode === 'enable') {
  enabledarkmode();
}
btn.addEventListener('click', (e) => {
  let darkmode = localStorage.getItem('darkmode');
  // if (darkmode === 'disable') {
  //   enabledarkmode();
  // } else {
  //   disabledarkmode();
  // }
  darkmode == 'disable' ? enabledarkmode() : disabledarkmode();
})
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      enabledarkmode();
    } else {
      disabledarkmode();
    }
  })
  
