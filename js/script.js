// const textBox = document.createElement("div")
// const text = document.createTextNode("Hello world")
// textBox.append("qwerty")
// console.dir(textBox);
// console.dir(text);


// const wrapper = dllllllocument.querySelector('.wrapper')

const textBox = document.createElement('p')
// const text = document.createTextNode('Hello world!')

textBox.innerText = 'Hello world'

wrapper.prepend(textBox)

console.dir(wrapper);

// Методы:
// 1) createElement
// 2) append prepend
// 3) after before
// 4) classlist (add, remove)
// 5) replaceWith

const wrapper = document.querySelector('.wrapper')
const firstBtn = document.querySelector('button')
const circle = document.querySelector('.circle')
const firstHeart = document.querySelector('.heart')

const textBox = document.createElement('div')
const greenBtn = document.createElement('button')

let text = 'Hello!'
// const text = document.createElement('p')
// const text = document.createTextNode('Hello world!')

// textBox.innerHTML = '<p class="back-col">${text}</p>'
// textBox.innerHTML = textBox.innerHTML + <p class="back-col">${text}</p>
textBox.innerHTML += <p class="back-col">${text}</p> // best version

greenBtn.classList.add('green-button')
// greenBtn.style.color = 'red'
circle.classList.remove('circle')
greenBtn.textContent = 'click'


firstBtn.before(greenBtn)
wrapper.before(textBox)

firstHeart.replaceWith(greenBtn)