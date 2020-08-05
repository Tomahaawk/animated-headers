const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

const toggleNavBar = (e) => {
  if (window.pageYOffset >= 160 && $navBar.classList.contains('abs-pos')) {
    $navBar.classList.replace('abs-pos', 'fix-pos');
  } else if (window.pageYOffset < 160 && $navBar.classList.contains('fix-pos')) {
    $navBar.classList.replace('fix-pos', 'abs-pos');
  }
};
window.addEventListener('scroll', toggleNavBar, false);

const $intLink = document.querySelectorAll('.int-link a');

const scrollToSection = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  const { offsetTop } = document.querySelector(target);
  const { offsetHeight } = $navBar;
  window.scrollTo({
    left: 0,
    top: offsetTop - offsetHeight,
    behavior: 'smooth',
  });
};
$intLink.forEach((link, index) => {
  link.addEventListener('click', scrollToSection, false);
});
