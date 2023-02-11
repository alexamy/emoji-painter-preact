import { render } from 'preact';
import { signal } from '@preact/signals';
import { html } from './html.js';

const count = signal(0);
const increment = () => count.value++;

function App() {
  return html`
    <div>
      <h1>${count.value}</h1>
      <button onClick=${increment}>+</button>
    </div>
  `;
}

render(html`<${App} />`, document.body);
