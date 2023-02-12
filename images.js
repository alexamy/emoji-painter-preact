import { html } from './html.js';
import { images, field, brush, background } from './state.js';

export function Images({ field }) {
	return html`
		<div>
			${field.value.map((row, i) => {
				return html`
					<${ImageRow} key=${i} row=${row} rowIndex=${i} />
				`;
			})}
		</div>
	`;
}

function ImageRow({ row, rowIndex }) {
	return html`
		<div class='imageRow'>
			${row.map((key, i) => {
				return html`
					<${Image} key=${i} src='${images.value[key]}' row=${rowIndex} col=${i} />
				`;
			})}
		</div>
	`;
}

function Image({ src, row, col }) {
	return html`
		<img class='image' src='${src}'
			onclick=${() => paint(row, col)}
			oncontextmenu=${(e) => { e.preventDefault(); erase(row, col); }}
		/>
	`;
}

function paint(rowi, coli) {
	field.value = field.value.map((row, r) => {
		return r !== rowi ? row : row.map((key, c) => {
			return c !== coli ? key : brush.value;
		});
	});
}

function erase(rowi, coli) {
	field.value = field.value.map((row, r) => {
		return r !== rowi ? row : row.map((key, c) => {
			return c !== coli ? key : background.value;
		});
	});
}
