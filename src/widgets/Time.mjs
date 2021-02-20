import { html, useState } from "https://cdn.skypack.dev/htm/preact/standalone?min"
import { useInterval } from "../hooks/useInterval.mjs"

const MINUTE_MS = 60000

export const Time = ({ style = "" }) => {
  const [date, setDate] = useState(new Date())

  useInterval(() => setDate(new Date()), MINUTE_MS)

  const hour = new Intl.DateTimeFormat("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  }).format(date)

  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date)

  return html`
    <section style="${style}">
      <h1 class="text-right">${hour}</h1>
      <p>${day}</p>
    </section>
  `
}
