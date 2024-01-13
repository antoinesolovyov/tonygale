console.log('Hello!')

const bg = document.getElementsByClassName("background")[0]
const image = bg.children[0]
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

console.log(bg, image, nextButton)

let i = 1
image.src = `/Users/antoinesolovyov/Desktop/tg/photos/sicily-${i}.jpg`
nextButton.onclick = () => {
    i++;
    image.src = `/Users/antoinesolovyov/Desktop/tg/photos/sicily-${i}.jpg`
}

prevButton.onclick = () => {
    i--;
    image.src = `/Users/antoinesolovyov/Desktop/tg/photos/sicily-${i}.jpg`
}
