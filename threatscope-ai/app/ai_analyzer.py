 
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_email(email_text: str) -> str:
    model = genai.GenerativeModel("gemini-2.5-flash")
    prompt = f"""
    Analyze the following email for phishing indicators.
    Respond with: 1) Is it phishing? (yes/no), 2) Key red flags, 3) Confidence score (0–100), 4) Simple explanation.

    Email:
    {email_text}
    """
    response = model.generate_content(prompt)
    return response.text
