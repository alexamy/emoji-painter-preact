import 'preact/debug';
import { render } from 'preact';
import { html } from './html.js';
import { images, field, fieldSize } from './state.js';

function FieldControls() {
  const { width, height } = fieldSize.value;

  return html`
    <div class='fieldControls'>
      <label class='fieldLabel' for='width'>Width: </label>
      <input class='fieldInput' type='number' name='width' value=${width} onchange=${(e) => console.log(e)}  />
      <label class='fieldLabel' for='height'>Height: </label>
      <input class='fieldInput' type='number' name='height' value=${height} />
    </div>
  `;
}

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
          <img class='icon' key=${i} src='${images.value[key]}' />
        `;
      })}
    </div>
  `;
}

function App() {
  return html`
    <div>
      <${FieldControls} />
      <${Images} field=${field} />
    </div>
  `;
}

render(html`<${App} />`, document.body);
