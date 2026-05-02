from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

client = genai.Client(api_key=API_KEY)

print("Bot: Hello! Type 'bye' to exit.")

while True:
    user = input("You: ")

    if user.lower() == "bye":
        break

    response = client.models.generate_content(
        model="gemini-3-flash-preview",   # ✅ FIXED
        contents=user
    )

    print("Bot:", response.text)






