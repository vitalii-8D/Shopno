const button = document.querySelector(".header-nav-btn");
const menuMobile = document.querySelector(".mobile-nav");


button.onclick = function () {
	this.classList.toggle('on-click');
	menuMobile.classList.toggle("left");
};

const anchors = document.querySelectorAll('header nav a')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}