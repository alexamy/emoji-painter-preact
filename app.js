import 'preact/debug';
import { render } from 'preact';
import { useSignal } from '@preact/signals';
import { html } from './html.js';

function App() {
  const count = useSignal(0);
  const increment = () => { console.log(count); count.value++; }

  return html`
    <div>
      <h1>${count.value}</h1>
      <button onClick=${increment}>+</button>
    </div>
  `;
}

render(html`<${App} />`, document.body);
