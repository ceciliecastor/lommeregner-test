let form = document.querySelector("#form");
let func = document.querySelector(".functions").value;
let seletedFunc = "";
func.addEventListener("click", function(event){
    seletedFunc.evet.target.id;
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    //henter værdien i tekstfeltet 
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    let output = document.querySelector("#result");
    
    //console.log(n1 + " " + n2 + " " + func);

    output.innerHTML = pocketRainer(n1, n2, func);

});

function pocketRainer(n1, n2, func) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    console.log(func)
    if (seletedFunc == "plus"){
        return n1 + n2; 
    }
    else if(seletedFunc == "minus"){
        return n1 - n2;
    }
    else if(seletedFunc == "divide"){
        return n1 / n2; 
    }
    else if(seletedFunc == "multiply"){
        return n1 * n2; 
    }
}