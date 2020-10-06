// The headline element
const display = document.querySelector('#display')

// The input field for size
const fontSize = document.querySelector('#input-size')
const fontType = document.querySelector('#select-font')
const fontColor = document.querySelector('#input-color')
const bgColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter-text')

// The element that displays the value
const sampleText = document.querySelector('#display')
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')

// The event listeners
fontSize.addEventListener('input', handleInput)
fontType.addEventListener('input', handleInput)
fontColor.addEventListener('input', handleInput)
bgColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)

// The input handler functions
function handleInput() {
    // Font size
    const newSize = fontSize.value + 'px'
    display.style.fontSize = newSize
    showSize.innerHTML = newSize

    // Font family
    const newFont = fontType.value
    display.style.fontFamily = newFont
    showFont.innerHTML = newFont

    // Font color
    const newColor = fontColor.value
    display.style.color = newColor
    showColor.innerHTML = newColor 

    // Background color
    const newBgColor = bgColor.value
    display.style.backgroundColor = newBgColor
    showBgColor.innerHTML = newBgColor

    // Display text area
    const newText = inputText.value
    sampleText.innerHTML = newText
    
}
