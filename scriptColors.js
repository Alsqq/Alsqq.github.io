let valueColors = '2';

function random1Color() {
    let nums = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    
    let color = '#'
    for (let i = 0; i<6; i++) {
        color = color + nums[Math.floor(Math.random() * nums.length)]
    }
    return color
}
function random2Colors() {
    let colors = [];

    let nums = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    
    for (let j = 0; j < 2; j++ ) {
        let color = '#'
        for (let i = 0; i < 6; i++) {
        color = color + nums[Math.floor(Math.random() * nums.length)]
        }
        colors.push(color)
    }
    return colors
}
function random3Colors() {
    let colors3 = [];
    let numbers = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    for (let i = 0; i < 3; i++) {
        let col = '#'
        for (let i = 0; i < 6; i++) {
            col = col + numbers[Math.floor(Math.random() * numbers.length)]
        }
        colors3.push(col)
    }
    return colors3
}

function set1Color() {
    const items = document.querySelectorAll('.colors__item')
    items.forEach(function (item) {

        let locked = item.querySelector('i').classList.contains('fa-lock');
        if (locked === true) {
            return
        }
        const text = item.querySelector('.colors__text')
        let color = random1Color()
        item.style.background = color
        text.textContent = color
    })
}
function set2Colors() {
    const items = document.querySelectorAll('.colors__item')
    items.forEach(function (item) {

        let locked = item.querySelector('i').classList.contains('fa-lock');
        if (locked === true) {
            return
        }
        const text = item.querySelector('.colors__text')
        let color = random2Colors()
        item.style.background = 'linear-gradient(350deg,' + color[0] + ',' + color[1] + ')'
        text.textContent = color[0] + ',' + color[1];
    })
}
function set3Colors() {
    const items = document.querySelectorAll('.colors__item')
    items.forEach(function (item) {
        let locked = item.querySelector('i').classList.contains('fa-lock');
        if (locked === true) {
            return
        }
        const text = item.querySelector('.colors__text')
        let color = random3Colors()
        item.style.background = 'linear-gradient(350deg,' + color[0] + ',' + color[1] + ',' + color[2] + ')'
        text.textContent = color[0] + ',' + color[1] + ',' + color[2];
    })
}

document.addEventListener('keydown', function(event){
    event.preventDefault();
    console.log(event)
    if (event.code === 'Space') {
        if (valueColors === '1') {
            set1Color()
        }
        if (valueColors === '2') {
            set2Colors()
        }
        if (valueColors === '3') {
        set3Colors()
        }
    }
})

document.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.classList[0] === 'colors__btn') {
        event.target.children[0].classList.toggle('fa-lock');
        event.target.children[0].classList.toggle('fa-lock-open');
    } else if (event.target.tagName.toLowerCase() === 'i') {
        event.target.classList.toggle('fa-lock');
        event.target.classList.toggle('fa-lock-open');
    }
    if (event.target.classList[0] === 'update__btn') {
            if (valueColors === '1') {
                set1Color()
            }
            if (valueColors === '2') {
                set2Colors()
            }
            if (valueColors === '3') {
            set3Colors()
            }
    }
    if (event.target.tagName.toLowerCase() === 'h2') {
        if (valueColors === '2' || valueColors === '3') {
            copyText('background: linear-gradient(350deg,' + event.target.textContent + ');')
        }
        if (valueColors === '1') {
            copyText('background:' + event.target.textContent + ';')
        }
        let copyMassage = document.querySelector('.copy__block');
        copyMassage.style.display = 'flex';
        setTimeout(function () {
            copyMassage.style.display = 'none';
        }, 500);
    }
    if(event.target.className.toLowerCase() === 'copy__btn') {
        if (valueColors === '2' || valueColors === '3') {
            copyText('background: linear-gradient(350deg,' + event.target.parentElement.querySelector('colors__text').textContent + ');')
        }
        if (valueColors === '1') {
            copyText('background:' + ' ' + event.target.parentElement.querySelector('colors__text').textContent + ';')
        }
        let copyMassage = document.querySelector('.copy__block');
        copyMassage.style.display = 'flex';
        setTimeout(function () {
            copyMassage.style.display = 'none';
        }, 500);
    }
    if (event.target.classList.contains('menu__btn')) {
        let menuBtns = document.querySelectorAll('.menu__btn');
        menuBtns.forEach( (item) => {
            item.classList.remove('active');
        })
        event.target.classList.toggle('active')
        console.log(event.target.value) 
        valueColors = event.target.value;
        if (valueColors === '1') {
            set1Color()
        }
        if (valueColors === '2') {
            set2Colors()
        }
        if (valueColors === '3') {
            set3Colors()
        }
    }
})
function copyText (text) {
    return navigator.clipboard.writeText(text)
}

set2Colors()