const inputEL = document.getElementById("input")
const totalCaracterEL= document.getElementById("total_caracter")
const romainingEL = document.getElementById("total_romaining")


inputEL.addEventListener("keyup", ()=>{
    updateCounter()
})
updateCounter()
function updateCounter() {
	totalCaracterEL.innerHTML = inputEL.value.length
	romainingEL.innerHTML = inputEL.getAttribute("maxLength") - inputEL.value.length
}