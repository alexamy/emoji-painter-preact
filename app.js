import 'preact/debug';
import { render } from 'preact';
import { html } from './html.js';
import { images, field } from './state.js';

function Images({ field }) {
  return html`
    <div>
      ${field.value.map((row, i) => {
        return html`
          <${ImageRow} key=${i} row=${row} />
        `;
      })}
    </div>
  `;
}

function ImageRow({ row }) {
  return html`
    <div>
      ${row.map((key, i) => {
        return html`
          <img key=${i} src='${images.value[key]}' />
        `;
      })}
    </div>
  `;
}

function App() {
  return html`
    <div>
      <${Images} field=${field} />
    </div>
  `;
}

render(html`<${App} />`, document.body);
