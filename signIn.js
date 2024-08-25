let email = document.getElementById("email");

let password = document.getElementById("password");
let signIn = document.getElementById("signIn");

let allDetails=localStorage.getItem("allDetails");
let allDetailsArr=JSON.parse(allDetails);
console.log(allDetails)

signIn.addEventListener('click', SignIn)
function SignIn(){
    let emailval=email.value;
    console.log(emailval);
    let passwordval=password.value;
    console.log(passwordval);

    let flag=false;
    allDetailsArr.forEach((ele)=>{
        if(ele.email===emailval && ele.password===passwordval)
        {
            alert("Sign In Succesfull");
            window.location.href = `index.html?email=${emailval}&name=${ele.name}`;
            flag=true;
            return;
        }
    })
    if(flag===false)
    {
        email.value=" ";
        password.value=" ";
        alert("Sign In failed")
        return;

    }
    
   

}
