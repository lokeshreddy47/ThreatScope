# 🛡️ ThreatScope AI — Phishing Email Analyzer  

ThreatScope AI is an **AI-powered phishing detection tool** that analyzes suspicious emails and highlights potential red flags.  
Built with **FastAPI, React, Tailwind CSS, and Gemini AI**, it provides a practical solution for identifying social engineering attempts.  

---

## 🚀 Features
- Detects phishing attempts in pasted emails  
- Identifies **red flags** (suspicious URLs, urgency tactics, poor grammar, fake domains, etc.)  
- Returns a **confidence score** with structured reasoning  
- Clean **React UI** with Markdown-rendered results  
- Scalable architecture with API + frontend separation  

---

## 🧩 Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Axios, react-markdown  
- **Backend:** FastAPI, Python, Uvicorn  
- **AI:** Gemini Pro (via `google-generativeai`)  
- **Optional Hosting:**  
  - Frontend → Vercel / Netlify  
  - Backend → Render / Railway / Heroku  

---

## ⚙️ Getting Started

### 1️⃣ Clone the repositories
```bash
git clone https://github.com/yourusername/threatscope-api
git clone https://github.com/yourusername/threatscope-ui
```

### 2️⃣ Backend Setup (FastAPI)
```bash
cd threatscope-api
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt

# Add API key in .env
echo GEMINI_API_KEY=your_api_key > .env

# Run server
uvicorn app.main:app --reload
# Access: http://127.0.0.1:8000/docs
```

### 3️⃣ Frontend Setup (React)
```bash
cd threatscope-ui
npm install
npm run dev
# Access: http://localhost:5173
```

👉 Make sure CORS is enabled in FastAPI if frontend and backend run separately:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173"],
  allow_methods=["*"],
  allow_headers=["*"],
)
```

---

## 🧪 Example Email Test
```
Subject: Important: Action Required to Prevent Service Disruption  

Hi,  
We’re reaching out to inform you that there has been an issue verifying your recent account activity.  
To avoid any potential disruption to your service, please confirm within 24 hours.  

Confirm now: http://account-security-check.com/login/verify?user=yourname  

Thanks,  
The Account Security Team  
```

**Output:**
- ✅ Phishing detected  
- 🚩 Red flags: Suspicious link, urgency, generic greeting, vague details  
- 📊 Confidence score: 100  
- 📝 Explanation: "This email uses scare tactics and a fake security domain to trick you into entering credentials."  

---

## 📂 Project Structure
```
threatscope-ai/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   └── ai_analyzer.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

## 🛣️ Roadmap
- [ ] Integrate **VirusTotal API** for URL reputation checks  
- [ ] Support **.eml file uploads** with header analysis  
- [ ] Add **confidence meter** (visual gauge)  
- [ ] Create an **admin dashboard** with phishing trends & reports  
- [ ] Dockerize project for one-click deployment  

---

## 📄 License
MIT License — free to use and modify.  

---

## 👤 Author
Developed by **Devarapalli Lokesh Reddy** — Cybersecurity & AI Enthusiast  

