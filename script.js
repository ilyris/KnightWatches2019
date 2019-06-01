// Global Variables
const mainSearchLink = document.querySelector('.searchBarItem');
const searchBarContainer = document.getElementById('searchContainer');
// const bodyContainer = document.querySelector('body');

// Event Listeners
window.onscroll = () => {
    toggleStickyNavbar();
}
// bodyContainer.addEventListener('click', clickOffSearch, false);

mainSearchLink.addEventListener('click', toggleSearchBar, false);

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
