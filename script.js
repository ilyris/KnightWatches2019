// Global Variables
const mainSearchLink = document.querySelector('.searchBarItem');
const searchBarContainer = document.getElementById('searchContainer');

// const bodyContainer = document.querySelector('body');

// Event Listeners
window.onscroll = () => {
    toggleStickyNavbar();
    toggleScrollTopButton();
    animateElements()
}
window.onload = () => {
    addAnimatedClasses();
}

function addAnimatedClasses() {
    const watchImageContainer = document.getElementsByClassName('watchImageContainer');
    const aboutWatchText = document.getElementsByClassName('aboutWatchText');
    for(let i = 0; i < watchImageContainer.length; i++) {
        watchImageContainer[i].classList.add('animated');
        aboutWatchText[i].classList.add('animated');
    }

}
// bodyContainer.addEventListener('click', clickOffSearch, false);
mainSearchLink.addEventListener('click', toggleSearchBar, false);

// add animated classes and add targeting classes
function animateElements() {
    const watchImageContainer = document.getElementsByClassName('watchImageContainer');
    const aboutWatchText = document.getElementsByClassName('aboutWatchText');
    const yPosition = window.scrollY;
    if(yPosition >= 1300 ) {
        watchImageContainer[0].classList.add('fadeInLeft');
        aboutWatchText[0].classList.add("fadeInRight");
    }
    if(yPosition >= 1900 ) {
        watchImageContainer[1].classList.add('fadeInRight');
        aboutWatchText[1].classList.add("fadeInLeft");
    }
    if(yPosition >= 2500 ) {
        watchImageContainer[2].classList.add('fadeInLeft');
        aboutWatchText[2].classList.add("fadeInRight");
    }
    if(yPosition >= 3100 ) {
        watchImageContainer[3].classList.add('fadeInRight');
        aboutWatchText[3].classList.add("fadeInLeft");
    }
    if(yPosition >= 3700 ) {
        watchImageContainer[4].classList.add('fadeInLeft');
        aboutWatchText[4].classList.add("fadeInRight");
    }
}


function toggleSearchBar() {
    searchBarContainer.classList.toggle("on");
    if(searchBarContainer.classList.contains("on")=== true) {
        mainSearchLink.classList.add('activeState');
    } else if(searchBarContainer.classList.contains("on") === false) {
        mainSearchLink.classList.remove('activeState');
    }
}

// function clickOffSearch(event) {
//     const yPosition = event.clientY;
//     if(searchBarContainer.classList.contains("on")=== true) {
//         if(yPosition >= 263) {
//             searchBarContainer.classList.remove('on');
//             mainSearchLink.classList.remove('activeState');
//         }
//     }
// }

function toggleStickyNavbar() {
    const mainNavigationContainer = document.getElementById('mainNavigation');
    if(window.pageYOffset >= 100) {
        mainNavigationContainer.classList.add("sticky");
    } else if(window.pageYOffset <= 99) {
        mainNavigationContainer.classList.remove("sticky");
    }
}
const toggleScrollTopButton = () => {
    const topScrollButton = document.querySelector(".top-scroll-container");
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 1000) {
      topScrollButton.classList.add("active", "fadeInUp");
    } else if (scrollPosition <= 999) {
        topScrollButton.classList.remove("active");
      }
  };
function animateWatchDivs() {



}