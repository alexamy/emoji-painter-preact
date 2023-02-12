import { html } from './html.js';
import { field, fieldSize, background } from './state.js';

export function FieldControls() {
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
			<button onclick=${clear}>Clear</button>
			<button onclick=${copy}>Copy</button>
		</div>
	`;
}

function setWidth(newWidth) {
	const { width } = fieldSize.value;
	if(newWidth <= 0) return;

	if(newWidth < width) {
		field.value = field.value.map(row => row.slice(0, newWidth));
	} else if(newWidth > width) {
		const newCount = newWidth - width;
		field.value = field.value.map(row => {
			const newCells = Array(newCount).fill(background.value);
			return [...row, ...newCells];
		});
	}
}

function setHeight(newHeight) {
	const { width, height } = fieldSize.value;
	if(newHeight <= 0) return;

	if(newHeight < height) {
		field.value = field.value.slice(0, newHeight);
	} else if(newHeight > height) {
		const newRowsCount = newHeight - height;
		const newRows = Array(newRowsCount).fill().map(() => Array(width).fill(background.value));
		field.value = [...field.value, ...newRows];
	}
}

function clear() {
	field.value = field.value.map(row => {
		return row.map(() => background.value);
	});
}

function copy() {
	const msg = field.value.map(row => row.join('')).join('\n');
	navigator.clipboard.writeText(msg);
}
