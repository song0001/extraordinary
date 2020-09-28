// 导航点击样式
var item = document.querySelectorAll('.nav .nav-item');
var span = document.querySelectorAll('.nav .nav-item span')
for (let i = 0; i < span.length; i++) {
    item[i].onclick = function() {
        for (let j = 0; j < span.length; j++) {
            span[j].classList.remove('act')
        }
        span[i].classList.add('act')
    }
}
// 成功案例导航
var itemEl = document.querySelectorAll('.case .case-nav .case-item')
    // console.log(itemEl);

for (let i = 0; i < itemEl.length; i++) {
    itemEl[i].onclick = function() {
        for (let j = 0; j < itemEl.length; j++) {
            itemEl[j].classList.remove('active')
        }
        this.classList.add('active')
    }
}
// 成功案例动画
var imgEl = document.querySelectorAll('.swiper img')
for (let i = 0; i < imgEl.length; i++) {
    imgEl[i].onmouseenter = function() {
        var target = this.offsetHeight - 215
        this.style.transform = `translateY(${-target}px)`
    }
    imgEl[i].onmouseleave = function() {
        this.style.transform = `translateY(0)`
    }

}