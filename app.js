import 'preact/debug';
import { render } from 'preact';
import { html } from './html.js';
import { Images } from './images.js';
import { field, fieldSize, setHeight, setWidth } from './state.js';

function FieldControls() {
  const { width, height } = fieldSize.value;

  return html`
    <div class='fieldControls'>
      <label class='fieldLabel' for='width'>Width: </label>
      <input class='fieldInput' type='number' name='width' value=${width} min='1' max='25'
        onchange=${(e) => setWidth(e.target.value)}
      />
      <label class='fieldLabel' for='height'>Height: </label>
      <input class='fieldInput' type='number' name='height' value=${height} min='1' max='25'
        onchange=${(e) => setHeight(e.target.value)}
      />
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
