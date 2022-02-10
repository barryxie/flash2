/** processForm: get data from form and make AJAX call to our API. */



async function processForm(evt) {
    evt.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let year = document.querySelector("#year").value;
    let color = document.querySelector("#color").value;
    console.log(color)
    let response = await axios.post("/api/get-lucky-num", {name,email,year,color});
    
    handleResponse(response.data)
    
    
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    let err = document.querySelectorAll("b")
    err.innerHTML = ""
    div = document.querySelector("#lucky-results");
    div.innerHTML = ""
    if(resp.num !== undefined){
        div.innerHTML = `Your lucky number is ${resp.num.num} (${resp.num.fact}). <br/>Your birth year (${resp.year.year}) fact is ${resp.year.fact}.`
    }
    else{
        let nameErr = document.querySelector("#name-err")
        nameErr.innerText = `${resp.errors.name}`
        let yearErr = document.querySelector("#year-err")
        yearErr.innerText = `${resp.errors.year}`
        let emailErr = document.querySelector("#email-err")
        emailErr.innerText = `${resp.errors.email}`
        let colorErr = document.querySelector("#color-err")
        colorErr.innerText = `${resp.errors.color}`
    }
}

$("#lucky-form").on("submit", processForm);
