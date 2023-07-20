import axios from 'axios';
import { render, useEffect } from 'preact/compat';

import HTTPRequest from './components/HTTPRequest';
import Interceptor from './components/Interceptor';

declare global {
	namespace JSX {
	  interface IntrinsicElements {
		'my-component': any;
	  }
	}
  }
  
export function App() {
	return (
		<>
			<HTTPRequest />

			<Interceptor />
		</>
		);
	}

// hocking to the /dist/index.html: `<div id="app"></div>`
render(<App />, document.getElementById('app'));