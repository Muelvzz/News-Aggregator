from fastapi import FastAPI, HTTPException, APIRouter
from dotenv import load_dotenv
import httpx, os

from ..schemas import NewsOut, SearchNews

load_dotenv()

router = APIRouter(
    prefix="/news",
    tags=["News"]
)

WORLD_NEWS_API_KEY = os.getenv("WORLD_NEWS_API")
BASE_URL = os.getenv("BASE_URL")

@router.get("/view-all")
async def get_news(text: str):
    params = {
        "api-key": WORLD_NEWS_API_KEY,
        "text": text,
        "language": "en"
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(BASE_URL, params=params)

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to load api")

        return response.json()
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))