from flask import Flask, request, jsonify
from chatbot import get_reply

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"]
    reply = get_reply(user_message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)