let errorMsg = document.querySelector(".error");
let userPass = document.querySelector("#user-password");
let userPassConfirm = document.querySelector("#user-password-confirm");
let submitButton = document.querySelector("#btn-create");

form.addEventListener("submit",confirmPassword);

function confirmPassword(event){
    let userPassword = userPass.value;
    let userPasswordConfirm = userPassConfirm.value;
    if(userPassword !== userPasswordConfirm){
        showError();
        event.preventDefault();
    }
}
function showError(){
    errorMsg.textContent="*Password don't match";
    errorMsg.className+=" errorStyle";
}