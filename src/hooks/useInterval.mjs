import { useEffect } from "https://cdn.skypack.dev/htm/preact/standalone?min"

export const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay)
    return () => clearInterval(interval)
  }, [delay])
}
