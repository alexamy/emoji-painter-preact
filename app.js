import 'preact/debug';
import { render } from 'preact';
import { html } from './html.js';
import { field } from './state.js';
import { Images } from './images.js';
import { FieldControls } from './controls.js';

function App() {
	return html`
		<div>
			<${FieldControls} />
			<${Images} field=${field} />
		</div>
	`;
}

render(html`<${App} />`, document.body);
