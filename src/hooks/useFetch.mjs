import { useState, useEffect } from "https://cdn.skypack.dev/htm/preact/standalone?min"

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  const fetchData = async () => {
    try {
      const res = await fetch(url, options)
      const json = await res.json()
      setResponse(json)
      setError()
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [response, error]
}
