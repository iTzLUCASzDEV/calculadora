const num = {
    1: document.querySelector('.botaoUm'),
    2: document.querySelector('.botaoDois'),
    3: document.querySelector('.botaoTres'),
    4: document.querySelector('.botaoQuatro'),
    5: document.querySelector('.botaoCinco'),
    6: document.querySelector('.botaoSeis'),
    7: document.querySelector('.botaoSete'),
    8: document.querySelector('.botaoOito'),
    9: document.querySelector('.botaoNove'),
    0: document.querySelector('.botaoZero')
}

const resultado = document.querySelector('.resultadoH')

const divResultado = document.querySelector('.resultado')

const operadores = {
    '+': document.querySelector('.mais'),
    '-': document.querySelector('.menos'),
    'x': document.querySelector('.X')
}

const enter = document.querySelector('.resultadob')

enter.addEventListener('click', darResultado)



let numeroguardado = 0

let conta1 = [0]
let conta2 = [0]

for (const [key, value] of Object.entries(num)) {
    num[`${key}`].addEventListener('click', function () {
        guardarNumero(key)
    })
}

for (const [key, value] of Object.entries(operadores)) {
    operadores[`${key}`].addEventListener('click', function () {
        guardarOperação(`${key}`)
    })
}

function transformarNumero() {
    conta1 = parseFloat(conta1)
    conta2 = parseFloat(conta2)
}

let tipo = ''

function guardarOperação(x) {
    conta2 = [0]
    numeroguardado = 1
    tipo = `${x}`
    resultado.innerHTML += ` ${x} `
}

function guardarNumero(x) {
    if (numeroguardado == 0) {        
        if (conta1[0] === 0 && conta1.length<=1){
            conta1 = []
        }
        conta1 += x
        resultado.innerHTML = conta1
    } else if (numeroguardado == 1) {
        conta2 += x
        resultado.innerHTML += `${conta2[conta2.length - 1]}`
    }
}

const contasGerais = {
    fazContaMais() {
        resultado.innerHTML = conta1 + conta2
        conta1 = conta1 + conta2
    },
    fazContaMenos() {
        resultado.innerHTML = conta1 - conta2
        conta1 = conta1 - conta2
    },
    fazContaMulti() {
        resultado.innerHTML = conta1 * conta2
        conta1 = conta1 * conta2
    }
}

function darResultado() {
    transformarNumero()
    if (tipo == '+') {
        contasGerais.fazContaMais()
    } else if (tipo == '-') {
        contasGerais.fazContaMenos()
    } else if (tipo == 'x') {
        contasGerais.fazContaMulti()
    }
    numeroguardado = 0
}

function reset() {
    conta1 = [0]
    conta2 = [0]
    numeroguardado = 0
    resultado.innerHTML = '0'
    tipo = ''
}

document.querySelector('.limpa').addEventListener('click', function () {
    reset()
})

