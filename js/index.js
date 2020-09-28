// 首页移动端导航
var btnNav = document.querySelector('.header-m .btn');
var nav_m = document.querySelector('.header-m-nav');
var spans = document.querySelectorAll('.header-m .btn span')
var banner = document.querySelector('.banner')
    // console.log(spans);
var num = 0
btnNav.onclick = function() {
    if (num == 0) {
        nav_m.style.display = 'block';
        btnNav.classList.add('act');
        banner.style.marginTop = '220px'
        nav_m.style.height = '160px'
        num++
    } else {
        nav_m.style.display = 'none'
        btnNav.classList.remove('act')
        nav_m.style.height = 0
        banner.style.marginTop = '60px'
        num = 0
    }
}

// banner轮播

var wrap = document.querySelector('.banner .wrap')
var img = document.querySelector('.wrap img')

var count = 0;

function swiper() {
    var timer = setInterval(function() {
        if (count === 3) {
            wrap.style.transition = 'none'
            wrap.style.transform = 'translateX(0)'
            count = 0;
        }
        setTimeout(function() {
            count++;
            // console.log(count);
            wrap.style.transition = '.8s'
            target = -count * img.offsetWidth;
            wrap.style.transform = `translateX(${target+'px'})`
        }, 50)
    }, 3000)
    banner.onmouseenter = function() {
        clearInterval(timer)
    }
    banner.onmouseleave = function() {
        swiper()
    }
}
swiper()

// 缓动动画方式轮播
// function time() {
//     var timer = setInterval(function() {
//         next();
//     }, 3000);
//     banner.onmouseenter = function() {
//         clearInterval(timer)
//     }
//     banner.onmouseleave = function() {
//         time()
//     }
// }
// time()

// function next() {
//     if (count === 3) {
//         wrap.style.left = 0;
//         count = 0
//     }
//     count++;
//     var target = -count * img.offsetWidth;
//     move(wrap, target)
// }
// // 缓动动画
// function move(el, target) {
//     if (el.timer) {
//         clearInterval(el.timer)
//     }
//     if (el.offsetLeft === target) {
//         return
//     }
//     el.timer = setInterval(function() {
//         var step = (target - el.offsetLeft) / 10;
//         if (Math.abs(step) <= 1) {
//             step = step > 0 ? 1 : -1;
//         }
//         el.style.left = el.offsetLeft + step + 'px';
//         if (el.offsetLeft === target) {
//             clearInterval(el.timer)
//         }
//     }, 1000 / 60)
// }

// 箭头点击事件
var arr = document.querySelectorAll('.case .arr div')
for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        for (let j = 0; j < arr.length; j++) {
            arr[j].classList.remove('act')
        }
        this.classList.add('act')
    }
}
// 启动动画
new WOW().init();