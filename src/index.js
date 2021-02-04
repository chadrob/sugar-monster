import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

Sentry.init({
	dsn:
		'https://0aeb358fd9e442e78e0de3d43e24f4ec@o505240.ingest.sentry.io/5622235',
	integrations: [new Integrations.BrowserTracing()],

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
});

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
