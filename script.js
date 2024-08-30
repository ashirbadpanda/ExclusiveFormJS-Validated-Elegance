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
        button[0].style.boxShadow = "0px 0px 15px black";
        button[1].style.backgroundColor="white"
        button[1].style.border="2px solid black"
        button[1].style.color = "black";
        button[1].style.boxShadow="0px 0px 10px black";

        inputs.forEach((input)=>{
            input.style.backgroundColor="white"
            input.style.border = "2px solid black"
            input.style.color="black"
            input.style.boxShadow="0px 0px 10px black";
        })

        themeBtn.innerText = "Dark"
    }else{
        section.style.backgroundColor = "black"
        form.style.border = "2px solid white"
        form.style.boxShadow = "0px 0px 10px white"
        button[0].style.backgroundColor="black"
        button[0].style.border="2px solid white"
        button[0].style.color="white"
        button[0].style.boxShadow = "0px 0px 15px white";
        button[1].style.backgroundColor="black"
        button[1].style.border="2px solid white"
        button[1].style.color="white"
        button[1].style.boxShadow="0px 0px 10px white";

        inputs.forEach((input)=>{
            input.style.backgroundColor="black"
            input.style.border="2px solid white"
            input.style.color="white"
            input.style.boxShadow="0px 0px 10px white";
        })
        themeBtn.innerText = "Light"
    }
})


//FORM VALIDATION


function formHandle(){
    event.preventDefault();
    
    let inputs = document.querySelectorAll("input")

    // console.log(inputs[0].value);
    // console.log(inputs[1].value);

    if(inputs[0].value===""||inputs[1].value===""){
        inputs[0].style.border="2px solid red"
        inputs[1].style.border="2px solid red"
        alert("please fill in all fields")
    }else{
        inputs[0].style.border="2px solid green"
        inputs[1].style.border="2px solid green"
        alert("form submitted successfully")
    }
    
    
    
    
}