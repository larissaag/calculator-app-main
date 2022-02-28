const themeOne = document.getElementById('themeOne');
const themeTwo = document.getElementById('themeTwo');
const themeThree = document.getElementById('themeThree');
const switchBall = document.getElementById('switchBall');
const body = document.getElementsByTagName('body');

themeOne.addEventListener('change', () => {
    if (themeOne.checked === true) {
        document.body.classList.remove('themeThree');
        document.body.classList.remove('themeTwo');
        switchBall.style.left = '4px'
    }
})
themeTwo.addEventListener('change', () => {
    if (themeTwo.checked === true) {  
        document.body.classList.remove('themeThree');
        document.body.classList.remove('themeOne');
        document.body.classList.add('themeTwo');
        switchBall.style.left = '36px';
    }
})
themeThree.addEventListener('change', () => {
    if (themeThree.checked === true) {
        document.body.classList.remove('themeTwo');
        document.body.classList.add('themeThree');
        switchBall.style.left = '70px';
    }
})

function insert (n) {
    let p = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = p + n;
}
function reset () {
    let p = document.getElementById('result');
    p.innerHTML = '';
}
function del () {
    let p = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = p.substring(0, p.length -1);
}
function calc () {
    let p = document.getElementById('result').innerHTML;
    if (p) {
        document.getElementById('result').innerHTML = eval(p);
    }
}