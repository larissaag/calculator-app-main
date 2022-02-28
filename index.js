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