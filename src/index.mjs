import { render, html } from "https://cdn.skypack.dev/htm/preact/standalone?min"
import { App } from "./components/App.mjs"

render(html`<${App} />`, window.root)
