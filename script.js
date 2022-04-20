async function handleAdvice() { 

// getting h1 (advice title) element by ID
let titleAdvice = document.getElementById("adviceHeading");

// getting p (advice itself) element by ID
let advice = document.getElementById("advice");

//getting button element by class
let btn = document.querySelector(".circle-dice")

fetch("https://api.adviceslip.com/advice").then((response) => {
    response.json().then((json) => {

        titleAdvice.innerText = `ADVICE #${json.slip.id}`;
        advice.innerText = `" ${json.slip.advice}"`;
    });
    btn.addEventListener('click', function() {
        window.location.reload();
        
    })
});
}
handleAdvice();