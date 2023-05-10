/** Animacion del titulo */
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var copyBtn = document.getElementById('copy')
var change = document.getElementById('change')

const titleEffect = event => {
    let iteration = 0;
    let interval  = setInterval(() =>{
        event.target.innerText = event.target.innerText.split('')
        .map((letter, index) => {
            if(index < iteration){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random()*36)]
        }).join('');

        if(iteration >= event.target.dataset.value.length ) clearInterval(interval)

        iteration +=1;
    }, 80)
}

const changeEffect = event => {
    let iteration = 0;
    let interval  = setInterval(() =>{
        change.innerText = document.getElementById('change').innerText.split('')
        .map((letter, index) => {
            return letters[Math.floor(Math.random()*36)]
        }).join('');
    }, 200)
}


changeEffect()


document.getElementById('title').onmouseover = titleEffect

/** Funciones del encriptador */

let encryptBtn = document.getElementById('encrypt')
let decryptBtn = document.getElementById('decrypt')
var textarea = document.getElementById('textInput')
var textOutput = document.getElementById('textOutput')

encryptBtn.addEventListener('click', () => {
    if (textarea.value != '') {
        textOutput.innerText = textarea.value.toLowerCase().split('').map(vocal =>{
            return vocal == 'a' ? 'ai' :  vocal == 'e' ? 'enter' : vocal == 'i' ? 'imes' : vocal == 'o' ? 'ober' : vocal == 'u' ? 'ufat' : vocal
        }).join('')

        copyBtn.style.display = 'block'
    }
})

decryptBtn.addEventListener('click', () => {
    if (textarea.value != '') {
        textOutput.innerText = textarea.value.toLowerCase().replaceAll('enter','e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u') 

        copyBtn.style.display = 'block'
    }
})

/** extra: Boton para copiar */

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textOutput.textContent)
    } catch (error) {
        console.log('No se pudo copiar el texto ', error)
    }
})


/** efecto matrix con canvas */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;

ctx.fillStyle = '#000'
ctx.fillRect(0, 0, w, h)

const cols = Math.floor(w/25) +1
const ypos = Array(cols).fill(0)


function matrix () {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#00ff14';
    ctx.font = '18pt monospace';
    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 25;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 30;
    });
  }
  
  setInterval(matrix, 160);