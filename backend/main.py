from fastapi import FastAPI
from backend.routers import news, saved_news

app = FastAPI()

app.include_router(news.router)