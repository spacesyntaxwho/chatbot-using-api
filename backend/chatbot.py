from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

client = genai.Client(api_key=API_KEY)

def get_reply(user_message):
    response = client.models.generate_content(
        model="gemini-3-flash-preview",   # fixed model name
        contents=user_message
    )
    return response.text

















