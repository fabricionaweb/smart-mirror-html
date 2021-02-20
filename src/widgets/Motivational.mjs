import { html } from "https://cdn.skypack.dev/htm/preact/standalone?min"
import { useFetch } from "../hooks/useFetch.mjs"

// TODO: https://zenquotes.io/#docs
const endpoint = "https://run.mocky.io/v3/d7002b70-02d7-45b6-8f8b-db454e44dede"

export const Motivational = ({ style = "" }) => {
  const [data = []] = useFetch(endpoint)
  const { q: quote } = data[0] || {}

  return html`
    <section class="fadeInDown" style=${style}>
      <h2>${quote}</h2>
    </section>
  `
}
