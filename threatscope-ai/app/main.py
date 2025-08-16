from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app.ai_analyzer import analyze_email
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailInput(BaseModel):
    content: str

@app.post("/analyze")
async def analyze(input_data: EmailInput):
    try:
        result = analyze_email(input_data.content)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

