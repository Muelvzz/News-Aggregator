from pydantic import BaseModel

# Request
class SearchNews(BaseModel):
    text: str