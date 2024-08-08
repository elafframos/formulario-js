let nome1 = document.getElementById('nome')
let nascimento = document.getElementById('data')
let res = document.getElementById('res')
let data = new Date()
let ano = data.getFullYear()
let fsex = document.getElementsByName('radsex') //Está chamando o input do HTML
let pre = document.getElementById('pre')

pre.style.textAlign = 'center'

function formulario() {
    if(nome1.value.length == 0) {
        alert('[ERRO] Digite algo!')
        nome1.focus()
    } else if(nascimento.value == 0)  {
        alert('[ERRO] Digite algo!')
        nascimento.focus()
    }
    else if(fsex[0].checked) {
        
        let nome = String(nome1.value)
        let idade = ano - nascimento.value
        res.innerHTML += `Nome: ${nome}<br>`
        res.innerHTML += `Sexo: Masculino<br>`
        res.innerHTML += `Idade: ${idade} anos`
    } else if (fsex[1].checked) {
        
        let nome = String(nome1.value)
        let idade = ano - nascimento.value
        res.innerHTML += `Nome: ${nome}<br>`
        res.innerHTML += `Sexo: Feminino<br>`
        res.innerHTML += `Idade: ${idade} anos`
    }
}
