function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor!! Digite um numero ! ')
    }else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
            c++
        }
    }
}