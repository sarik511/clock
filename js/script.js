let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    elHour = document.querySelector('.hours'),
    elMin = document.querySelector('.minutes');


// console.log(new Date().getSeconds());

// new Date() - Глобальный обьект в JS. Берёт время с компа

/* Рекурсия - это когда функция вызвает саму себя */

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    sec.style = `transform:rotate(${seconds}deg)`
    min.style = `transform:rotate(${minutes}deg)`
    hour.style = `transform:rotate(${hours}deg)`

    elMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    elHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < links.length; i++) {
    // console.log(links[i]);

    links[i].addEventListener('click', function () {

        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        this.classList.add('active')
        tabs[i].classList.add('active')
    })
}

/* ============ Секундомер ==================== */


let stopSec = document.querySelector('.stopwatch__seconds'),
    stopMin = document.querySelector('.stopwatch__minutes'),
    stopHour = document.querySelector('.stopwatch__hours'),
    stopBtn = document.querySelector('.stopwatch__btn');




stopBtn.addEventListener('click', function () {
    if (stopBtn.innerHTML == 'start') {
        stopBtn.innerHTML = 'stop'
        let i = 0;
        setTimeout(() => {
            stopWatch(this, i)
        }, 1000);
    } else if (stopBtn.innerHTML == 'stop') {
        stopBtn.innerHTML = 'clear'
    } else {
        stopBtn.innerHTML = 'start'
        stopSec.innerHTML = 0;
        stopMin.innerHTML = 0;
        stopHour.innerHTML = 0;
    }
})

function stopWatch(btn, i) {
    if (stopBtn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            stopSec.innerHTML = i;
            if (stopMin.innerHTML == 59) {
                stopMin.innerHTML = 0;
                stopHour.innerHTML++;
            } else {
                stopMin.innerHTML++;
            }
        } else {
            i++;
            stopSec.innerHTML = i;
        }
        setTimeout(() => {
            stopWatch(btn, i)
        }, 1000);
    }
}
