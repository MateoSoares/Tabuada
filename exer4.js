function gerar() {
    let a = document.getElementById('num')
    let num = Number(a.value)
    let tabu = document.getElementById('tabu')
    tabu.innerHTML = ''
    if (a.value.length == 0) {
        window.alert('[ERRO] Faltam dados.')
    } else {
        for (let m = 0; m <= 10; m++) {
        tabu.innerHTML += `
        ${num} x ${m} = ${num * m} `
        }
    }
}

fun