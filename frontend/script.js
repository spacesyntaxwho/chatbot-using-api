async function sendMessage() {
    let input = document.getElementById("input");
    let message = input.value;

    let res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    let data = await res.json();

    document.getElementById("chat").innerHTML += 
        "<p><b>You:</b> " + message + "</p>" +
        "<p><b>Bot:</b> " + data.reply + "</p>";

    input.value = "";
}