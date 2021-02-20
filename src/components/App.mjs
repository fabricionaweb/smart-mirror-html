import { html } from "https://cdn.skypack.dev/htm/preact/standalone?min"

import { Motivational } from "../widgets/Motivational.mjs"

export const App = () => {
  return html`
    <main class="main">
      <${Motivational} style="grid-area: 2 / 2" />
    </main>
  `
}
