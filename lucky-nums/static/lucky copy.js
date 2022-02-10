/** processForm: get data from form and make AJAX call to our API. */




async function processForm(evt) {
    evt.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let year = document.querySelector("#year").value;
    let color = document.querySelector("#color").value;
    let resp = await axios.post("/api/get-lucky-num", {name, email, year, color});
    console.log(resp)
    handleResponse(resp.data)
    
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    div = document.querySelector("#lucky-results");
   
   
}


$("#lucky-form").on("submit", processForm);
