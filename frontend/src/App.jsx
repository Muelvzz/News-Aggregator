import { useState, useEffect } from 'react'
import './App.css'

import api from './api'
import LoadingScreen from './LoadingScreen'
import ErrorScreen from './ErrorScreen'

function App() {

  const [news, setNews] = useState({ news: [] })
  const [refresh, setRefresh] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function loadNews() {
    setLoading(true)

    try {
      const res = await api.get("/news/view-all")
      setNews(res.data)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadNews()
  }, [refresh])

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen />

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
