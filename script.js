
const mainSearchLink = document.getElementById('mainSearchLink');
mainSearchLink.addEventListener('click', toggleSearchBar, false);

function toggleSearchBar() {
    const searchBarContainer = document.getElementById('searchContainer');

    searchBarContainer.classList.toggle("on");

    if(searchBarContainer.classList.contains("on")=== true) {
        mainSearchLink.classList.add('activeState');
    } else if(searchBarContainer.classList.contains("on") === false) {
        mainSearchLink.classList.remove('activeState');
    }
}

function toggleSearchLinkActiveState() {

}