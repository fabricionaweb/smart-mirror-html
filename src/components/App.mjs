import { html } from "https://cdn.skypack.dev/htm/preact/standalone?min"

import { Motivational } from "../widgets/Motivational.mjs"
import { Time } from "../widgets/Time.mjs"

export const App = () => {
  return html`
    <main class="main">
      <${Time} style="grid-area: 1 / 3" />
      <${Motivational} style="grid-area: 2 / 2" />
    </main>
  `
}
