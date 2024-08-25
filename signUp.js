let username = document.getElementById("name");
console.log(username.value)
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.getElementById("signUp");


let data = localStorage.getItem("allDetails");
let allDetails = [];

signUp.addEventListener('click', SignUp)
function SignUp() {
    let obj = {};
    let data = localStorage.getItem("allDetails");
    //console.log(data);
    let data2 = JSON.parse(data);
    if (data2 != null) {
        allDetails = [...data2]

    }
    //allDetails=[...data2];
    // console.log(data2);
    // console.log(allDetails);



    if (username.value != " " && username.value.trim() != "") {
        //localStorage.setItem('username', JSON.stringify(username.value.trim()))
        obj.name = username.value;
        username.value = " ";
    }
    else {
        alert("Please Enter A valid userName");
        return;
    }
    if (email.value != " " && email.value.trim() != "") {
        console.log(allDetails);
        let flag = false;


        if (allDetails.length > 0) {
            allDetails.forEach((ele) => {
                console.log(ele.email);
                console.log(email.value)
                if (ele.email == email.value) {

                    alert("Email Alredy Exist");
                    flag = true;
                    return;
                }

            })
        }
        if (flag === false) {
            obj.email = email.value;
            email.value = " ";
        }
        else {
            return;
        }
    }
    else {
        alert("Please Enter A valid email");
        return;
    }
    if (password.value != " " && password.value.trim() != "") {
        // localStorage.setItem('password', JSON.stringify(password.value.trim()))
        obj.password = password.value
        password.value = " ";
    }
    else {
        alert("Please Enter A valid password");
        password.value = " ";
        return;

    }
    allDetails.push(obj);
    localStorage.setItem("allDetails", JSON.stringify(allDetails));
}