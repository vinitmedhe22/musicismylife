const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

let nama=document.getElementById("nama");
let gender=document.getElementById("gender");
let address=document.getElementById("address");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let checkbox=document.getElementById("check-box");

let errorname=document.getElementById("errorname");
let errorgender=document.getElementById("errorgender");
let erroraddress=document.getElementById("erroraddress");
let erroremail=document.getElementById("erroremail");
let errorphone=document.getElementById("errorphone");

function validateForm(){
    let form=true;
    if(nama.value.length<1){
      form=false;
      errorname.innerHTML="Name can't be empty";
    } else if(isNaN(nama.value)==false){
      form=false;
      errorname.innerHTML="Name can only contain alphabets";
    } else{
      errorname.innerHTML="";
    }
    if(gender.value!="male"&&gender.value!="Male"&&gender.value!="female"&&gender.value!="Female"&&gender.value!='-'){
      form=false;
      errorgender.innerHTML="Male/Female/Type '-' if you prefer not to say";
    } else{
      errorgender.innerHTML="";
    }
    if(address.value.length<1){
      form=false;
      erroraddress.innerHTML="Address can't be empty";
    } else{
      erroraddress.innerHTML="";
    }
    if(email.value.length<1){
      form=false;
      erroremail.innerHTML="Email can't be empty";
    } else if(email.value.endsWith("@gmail.com")==false){
      form=false;
      erroremail.innerHTML="Email must end with @gmail.com";
    } else if(email.value.startsWith("@gmail.com")==true||isNaN(email.value.charAt(0))==false){
      form=false;
      erroremail.innerHTML="Invalid email";
    } else{
      erroremail.innerHTML="";
    }
    if(phone.value.length<1){
      form=false;
      errorphone.innerHTML="Phone number can't be empty";
    } else if(phone.value.length<10||isNaN(phone.value)){
      errorphone.innerHTML="Invalid phone number";
    } else{
      errorphone.innerHTML="";
    }
    if(form==true){
      alert("You have successfully became a new member!");
    }
  }