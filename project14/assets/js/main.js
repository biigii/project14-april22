function typeSomething() {
    const input = document.querySelector('[data-input]')
    const text = input.value
    const h1 = document.createElement('h1')
    h1.textContent = text
    document.body.appendChild(h1)
}

function addItem() {
    const value = document.querySelector('[data-item]').value
    const ul = document.querySelector('[data-list]')
    const li = document.createElement('li')
    li.innerHTML = value
    ul.appendChild(li)
}

function changeTheme() {
    const color = document.querySelector('[data-theme]').value
    document.body.style.backgroundColor = color
}

function printSomething() {
    const password = document.querySelector('[data-type]').value
    const label = document.querySelector('[data-label]')
    label.textContent = password
}

const isThisCorrect = false

function bodyResized() {
    const width = window.innerWidth
    if (width > 1400) {
        document.body.style.backgroundColor = '#000'
    }

    if (width < 1400) {
        document.body.style.backgroundColor = '#fff'
    }
}

const fruits = ['apple', 'orange', 'watermelon', 'cherry', 'kiwi', 'carrot']

fruits.forEach(printFruitsToWebPage)

function printFruitsToWebPage(fruit) {
    const ol = document.querySelector('[data-fruits]')
    const li = document.createElement('li')
    li.textContent = fruit
    ol.appendChild(li)
}

// console.log(1000 + 2000)
// console.log('hello' + ' ' + 'world')
// console.log('hello' + 3000)

// images = [1000, 1060, 1061, 1064, 1050, 100, 101, 300]

// images.forEach(function (id) {
//     const figure = document.querySelector('figure')
//     const img = document.createElement('img')
//     img.src = 'https://picsum.photos/id/' + id + '/200'
//     img.alt = 'random photo'
//     figure.appendChild(img)
// })

  for (let i = 0; i < 300; i++) {
    const figure = document.querySelector('figure')
    const img = document.createElement('img')
    img.src = 'https://picsum.photos/id/' + i + '/200'
    // img.width = 50
    figure.appendChild(img)
}
