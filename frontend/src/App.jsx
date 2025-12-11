import { useState, useEffect } from 'react'
import './App.css'

import api from './api'

function App() {

  const [news, setNews] = useState({ news: [] })
  const [refresh, setRefresh] = useState(false)

  async function loadNews() {
    try {
      const res = await api.get("/news/view-all")
      setNews(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadNews()
  }, [refresh])

  return (
    <>
      {news.news.map((article, index) => (
        <div key={index}>
          <p>{ article.title }</p>
          <p>{ article.text }</p>
        </div>
      ))}
    </>
  )
}

export default App
