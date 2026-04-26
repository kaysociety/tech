function sayHello() {
    alert("Hello! Welcome to our project 🎉");
}

function greetUser() {
    let name = document.getElementById("name").value;
    document.getElementById("output").textContent = "Join the Movement  " + name + "!";
}