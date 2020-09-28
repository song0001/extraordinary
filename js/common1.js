// 移动端导航 除了首页其他页面通用
var btnNav = document.querySelector('.header-m .btn');
var nav_m = document.querySelector('.header-m-nav');
var spans = document.querySelectorAll('.header-m .btn span');
var des = document.querySelector('.des');
console.log(des);
var num = 0
btnNav.onclick = function() {
    if (num == 0) {
        nav_m.style.display = 'block';
        btnNav.classList.add('act');
        des.style.marginTop = '220px'
        nav_m.style.height = '160px'
        num++
    } else {
        nav_m.style.display = 'none'
        btnNav.classList.remove('act')
        nav_m.style.height = 0
        des.style.marginTop = '60px'
        num = 0
    }
}