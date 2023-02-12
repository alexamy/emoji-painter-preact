import { html } from './html.js';
import { images } from './state.js';

export function Images({ field }) {
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
    <div class='imageRow'>
      ${row.map((key, i) => {
        return html`
          <${Image} key=${i} src='${images.value[key]}' />
        `;
      })}
    </div>
  `;
}

function Image({ src }) {
  return html`
    <img class='image' src='${src}' />
  `;
}
