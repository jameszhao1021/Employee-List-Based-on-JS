


/* var submit = document.querySelector("#submit")
var input = document.querySelectorAll("input");
var table = document.querySelector("#employeeList"); */

function del(){
    var tr = this.parentNode.parentNode;
    var name = tr.querySelectorAll("td")[0].innerHTML;
    var myConfirm = confirm("Do you want to delete"+" "+ name+"?");
    if(myConfirm){
    tr.remove();
    }
}


window.onload = function(){
var a = document.querySelectorAll("a")
var submit = document.querySelector("#submit")
var input = document.querySelectorAll("input");
var table = document.querySelector("#employeeList");

for (var i = 0; i<a.length; i++){
    a[i].addEventListener("click", del)
}


submit.addEventListener("click", ()=>{
    var name = input[0].value;
    var email = input[1].value;
    var salary = input[2].value;
    if(name){
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + name + "</td>" + "<td>" + email + "</td>" + 
    "<td>" + salary + "</td>" + "<td><a href='deleteEmp?id=001'onclick='return false;'>Delete</a></td>";
    table.appendChild(tr);
    }else{
        alert("Please enter the name")
    }
    for (var i = 0; i<input.length-1; i++){
        input[i].value = "";
    }

    var a = tr.querySelector("a");
    a.addEventListener("click", del);
})
}