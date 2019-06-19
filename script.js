// Global Variables
const mainSearchLink = document.querySelector('.searchBarItem');
const searchBarContainer = document.getElementById('searchContainer');
const clearSearchBarButton = document.getElementById('clearSearchBarButton');
const startSearchButton = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');

// const bodyContainer = document.querySelector('body');

// Event Listeners
window.onscroll = () => {
    toggleStickyNavbar();
    toggleScrollTopButton();
    animateElements();
}
window.onload = () => {
    addAnimatedClasses();
}

mainSearchLink.addEventListener('click', toggleSearchBar, false);
document.addEventListener('click',clickOffSearch, false);
clearSearchBarButton.addEventListener('click', clearSearchBar, false);


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
}


function toggleSearchBar() {
    searchBarContainer.classList.toggle("on");
    if(searchBarContainer.classList.contains("on")=== true) {
        mainSearchLink.classList.add('activeState');
    } else if(searchBarContainer.classList.contains("on") === false) {
        mainSearchLink.classList.remove('activeState');
    }
}
const dropDownParentLinks = document.querySelector('.mainLi.dropDownParent a');
dropDownParentLinks.addEventListener('click', toggleMenuLinks, false);

function toggleMenuLinks() {
    const subMenuWrapper = document.getElementById('subMenuWrapper').classList;
    const subMenu = document.getElementById('subMenu').classList;
    const dropDownParentLi = document.querySelector('.mainLi.dropDownParent').classList;

    subMenuWrapper.toggle("show");
    subMenu.toggle("show");
    dropDownParentLi.toggle('activeState');
    if(dropDownParentLi.contains('activeState')) {
        dropDownParentLinks.style.color ="black";
    } else if(!dropDownParentLi.contains('activeState')) {
        dropDownParentLinks.style.color ="#b27300";
    }
    
}

function clickOffSearch(event) {
    const searchBarLink = document.querySelector('.searchBarItem');
    const searchBar = document.getElementById('searchContainer');

    // tracking the users clicks, if the clicks are within these three elements, then return nothing. Which will not close the search bar
    if(event.target.closest('#logoWrapper') || event.target.closest('#mainNavigation') || event.target.closest('#searchContainer')) return;

    // If the users click is outside of the search bar then the search bar will close.
    searchBar.classList.remove('on');
    searchBarLink.classList.remove('activeState');
}

function toggleStickyNavbar() {
    const mainNavigationContainer = document.getElementById('mainNavigation');
    if(window.pageYOffset >= 100) {
        mainNavigationContainer.classList.add("sticky");
    } else if(window.pageYOffset <= 99) {
        mainNavigationContainer.classList.remove("sticky");
    }
}
function toggleScrollTopButton() {
    const topScrollButton = document.querySelector(".top-scroll-container");
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 1000) {
      topScrollButton.classList.add("active", "fadeInUp");
    } else if (scrollPosition <= 999) {
        topScrollButton.classList.remove("active");
      }
  }

  
function addAnimatedClasses() {
    const watchImageContainer = document.getElementsByClassName('watchImageContainer');
    const aboutWatchText = document.getElementsByClassName('aboutWatchText');
    for(let i = 0; i < watchImageContainer.length; i++) {
        watchImageContainer[i].classList.add('animated');
        aboutWatchText[i].classList.add('animated');
    }

}
function clearSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.value ="";
}