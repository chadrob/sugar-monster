import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
	Sentry.init({
		dsn:
			'https://d9588a368fd4411290d07d9f8e720501@o505240.ingest.sentry.io/5593307',
		autoSessionTracking: true,
		integrations: [new Integrations.BrowserTracing()],

		// We recommend adjusting this value in production, or using tracesSampler
		// for finer control
		tracesSampleRate: 1.0,
	});
}

function log(error) {
	// does Sentry log errors automatically?
}

export default {
	init,
	log,
};
