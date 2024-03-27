

var loginUrl = "https://retoolapi.dev/wOZG9C/InvLogin";
var productsUrl = "https://retoolapi.dev/qf4LYd/InvProducts";
var cartUrl = "https://retoolapi.dev/3KELBn/InvCart";

function registerEmployee(employee){
    fetch(loginUrl, {
        "method": "POST",
        "body": JSON.stringify(employee),
        "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then((response)=> response.json())
    .then((data)=> { 
        console.log(data);
        alert("Registered Successfully...");
        window.location.href="./login.html";
    }).catch((err)=> {
        console.log(err);
        alert("Currently not able to Register.. Please check the data and try again..");
    });


}

function employeeLogin(userName, pswd){
    let apiUrl = loginUrl + "?empName=" + userName + "&password=" +pswd;
    fetch(apiUrl, {
        "method": "GET",
        "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then((response)=> response.json())
    .then((data)=> {
        
        console.log(data);
        if(data.length > 0) 
        {
            sessionStorage.setItem("user",userName);
                window.location.href = "./index.html";
        }
        else
            alert("Invalid Username or password");
        
    }).catch((err)=> {
        console.log(err);
        alert("Something Went wrong,,Please try again later....");
    })
}

function displayProducts(){

}

function addToCart(){

}

function displayCart(){

}

function approveProduct(){

}

function rejectProduct(){

}

function displayEmployees(){

}

function approveEmployee(){

}

function rejectEmployee(){

}