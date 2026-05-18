async function sendMessage() {

    let input = document.getElementById("input");
    let message = input.value;

    if(message.trim() === ""){
        return;
    }

    let chat = document.getElementById("chat");

    // User Message
    chat.innerHTML += `
        <div class="message user">
            <b>You:</b> ${message}
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    try {

        let res = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        });

        let data = await res.json();

        // Bot Message
        chat.innerHTML += `
            <div class="message bot">
                <b>Bot:</b> ${data.reply}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    } 
    catch(error) {

        chat.innerHTML += `
            <div class="message bot">
                <b>Bot:</b> Server Error
            </div>
        `;
    }

    input.value = "";
}

// Enter key support

document.getElementById("input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});