let themeBtn = document.querySelector("#theme")

themeBtn.addEventListener("click",()=>{
    let section = document.querySelector("section")
    let form = document.querySelector("form")
    let inputs = document.querySelectorAll("input")
    let button = document.querySelectorAll("button")

    if(themeBtn.innerText === "Light"){
        section.style.backgroundColor = "white"
        form.style.border = "2px solid black"
        form.style.boxShadow = "0px 0px 10px black"
        button[0].style.backgroundColor="white"
        button[0].style.border="2px solid black"
        button[0].style.color="black"
        button[1].style.backgroundColor="white"
        button[1].style.border="2px solid black"
        button[1].style.color="black"

        inputs.forEach((input)=>{
            input.style.backgroundColor="white"
            input.style.border = "2px solid black"
        })

        themeBtn.innerText = "Dark"
    }else{
        section.style.backgroundColor = "black"
        form.style.border = "2px solid white"
        form.style.boxShadow = "0px 0px 10px white"
        button[0].style.backgroundColor="black"
        button[0].style.border="2px solid white"
        button[0].style.color="white"
        button[1].style.backgroundColor="black"
        button[1].style.border="2px solid white"
        button[1].style.color="white"

        inputs.forEach((input)=>{
            input.style.backgroundColor="black"
            input.style.border="2px solid white"
        })
        themeBtn.innerText = "Light"
    }
})