// let doc = document;
// let head= document.head;
// let body = document.body;
// let form = document.querySelector('form');
// let inputs = document.querySelector('input')
let firstName =document.querySelector('#first_name');
// let LastName =document.querySelector('#last_name');
// let phone = document.querySelector('#phone');
let buttonDanger = document.querySelector('.bg-danger');
let password = document.querySelector('#password_2');
let email = document.querySelector('#email.top');
let buttonInfo = document.querySelector('.bg-ingo');
let date = document.querySelector('#date');

buttonInfo.addEventListener('click',()=>{
    let firstName =document.querySelector('#first_name').value.trim().length;
    let password = document.querySelector('#password_2').value.trim().length;
let email = document.querySelector('#email.top').value.trim().length;
if(firstName ===0){
alert('Заполните поле "имя"');
}
if (email===0){
alert('Заполните поле "почта"');
}
if (password ===0){
    alert('Заполните поле "пароль"');
}
if (password !==0 && email !==0 && firstName !==0){
alert('прикольно');
}
})
// console.log(firstName.value);

// debugger;

// firstName.value = "new name";
// let test = firstName.value;
// let testTrim = firstName.value.trim();
// console.log(test.length);
// console.log(testTrim.length);
// let pass = document.querySelector('#last_name');
// let buttonDanger = document.querySelector('bg-danger');
// console.log(buttonDanger);
//   if(pass.value.length === 0){
//   console.log('input is empty')
//   }else{
//   console.log(firstName.value.length);
//  }
//   buttonDanger.addEventListener("click", ()=>{
//   console.log("click on button");
//    alert('hello!');
//   } );
