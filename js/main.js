const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './images/icons/nav-close.png';
    } else {
        navBtnImg.src = './images/icons/nav-open.png';
    }
}