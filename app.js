let items = document.querySelectorAll('body')
let pan = document.querySelectorAll('.innbox')
let pa = document.querySelectorAll('.pan')
let btn = document.querySelectorAll('.ech')
let btn2 = document.querySelectorAll('.ech2')
let btn3 = document.querySelectorAll('.ech3')
let btn4 = document.querySelectorAll('.ech4')
let btn5 = document.querySelectorAll('.ech5')

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        items[i].style.background = 'red'
        pa[i].style.background = 'white'
    })
    for(let i = 0; i < btn2.length; i++) {
        btn2[i].addEventListener('click', () => {
            items[i].style.background = 'orange'
            pa[i].style.background = 'white'
        })
        for(let i = 0; i < btn3.length; i++) {
            btn3[i].addEventListener('click', () => {
                items[i].style.background = 'blue'
                pa[i].style.background = 'white'
            })
            for(let i = 0; i < btn4.length; i++) {
                btn4[i].addEventListener('click', () => {
                    items[i].style.background = 'black'  
                    pa[i].style.background = 'white'   
                })
                for(let i = 0; i < btn5.length; i++) {
                    btn5[i].addEventListener('click', () => {
                        items[i].style.background = 'white'
                    })
                }
            
        }
    }
}
}