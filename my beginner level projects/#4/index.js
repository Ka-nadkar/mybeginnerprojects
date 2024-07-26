const passwordbox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()><?/{}";


allChars = uppercase + lowercase + number + symbol;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()* uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += number[Math.floor(Math.random()* uppercase.length)];
    password += symbol[Math.floor(Math.random()* uppercase.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }   
    passwordbox.value = password;

function copytext(){
    passwordbox.select();
    document.execCommand("copy");
}

}